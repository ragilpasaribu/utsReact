/* eslint-disable no-unused-vars */
import {Heart} from 'lucide-react';
import {useState} from 'react';
import PopUpEditFilm from '../Components/PopUpEditFilm.jsx';
import PopUpTambahFilm from '../Components/PopupTambahFilm.jsx';
import {useEffect} from 'react';

const initData = [{}];
const savedData = localStorage.getItem('data');

export default function Film() {
  const [data, setData] = useState([
    {
      id: 1,
      judul: 'Keluarga Cemara',
      gambar:
        'https://assets-a1.kompasiana.com/items/album/2019/01/22/keluarga-cemara-5c4710a943322f31d54bba09.jpg',
      tahunRilis: 2004,
      Genre: 'Keluarga',
      Durasi: '1 Jam',
      Sinopsis:
        'Keluarga Cemara Menceritakan Tentang Sebuah Keluarga Yang Harmonis',
      liked: false,
    },
    {
      id: 2,
      judul: 'Cinderella',
      gambar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4G-K1VmQYhhjpnVecOKjmKWLKmRsqy04rzw&s',
      tahunRilis: 2020,
      Genre: 'Romantis',
      Durasi: '2 Jam',
      Sinopsis:
        'Menceritakan Tentang Sebuah Keluarga Yang Harmonis Yang Tiba Tiba Hancur',
      liked: false,
    },
    {
      id: 3,
      judul: 'A Quiet Place',
      gambar:
        'https://asset.tix.id/wp-content/uploads/2024/06/61870ef3-ef89-4f2d-b444-b439560397f2.webp',
      tahunRilis: 2022,
      Genre: 'Horor',
      Durasi: '1 Jam',
      Sinopsis:
        'Menceritakan Tentang Sebuah Keluarga Yang Harmonis Yang Di Datangi Monster Jahat Ih Serem Jadi Atut',
      liked: false,
    },
    {
      id: 4,
      judul: 'AQUAMAN',
      gambar:
        'https://m.media-amazon.com/images/M/MV5BMzZlZDQ5NWItY2RjMC00NjRiLTlmZTgtZGE2ODEyMjVlOTJhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
      tahunRilis: 2023,
      Genre: 'Petualangan',
      Durasi: '2 Jam',
      Sinopsis:
        'Menceritakan Tentang Sebuah Keluarga Yang Harmonis Di Bawah Laut Dan Kerajaan Nya Yang Di Serang Monster laut',
      liked: false,
    },
    {
      id: 5,
      judul: 'Iron Man',
      gambar:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg',
      tahunRilis: 2000,
      Genre: 'Aksi',
      Durasi: '1 Jam',
      Sinopsis:
        'Menceritakan Seorang Pahlawan Amerika Yang Gagah Dan Tampan Berani ummuah',
      liked: false,
    },
    savedData ? JSON.parse(savedData) : initData,
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isAddingFilm, setIsAddingFilm] = useState(false);
  const [search, setSearch] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const handleInformation = film => {
    alert(
      `Judul: ${film.judul}\nGenre: ${film.Genre}\nDurasi: ${film.Durasi}\nSinopsis: ${film.Sinopsis}`,
    );
  };

  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);

    const filteredFilms = data.filter(film =>
      film.judul.toLowerCase().includes(searchTerm),
    );
    setFilteredData(filteredFilms);
  };

  const handleSort = criteria => {
    let sortedData = [...data];
    switch (criteria) {
      case 'nama':
        sortedData.sort((a, b) => a.judul.localeCompare(b.judul));
        break;
      case 'id':
        sortedData.sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }
    setFilteredData(sortedData);
    setSortCriteria(criteria);
  };

  const handleEditFilm = film => {
    setSelectedFilm(film);
  };

  const handleDeleteFilm = filmId => {
    if (
      window.confirm(
        `Apakah Anda Yakin Ingin Menghapus Film ${filmId.judul} Ini?`,
      )
    ) {
      setData(data.filter(film => film.id !== filmId));
    }
  };

  const toggleLike = filmId => {
    setData(
      data.map(film =>
        film.id === filmId ? {...film, liked: !film.liked} : film,
      ),
    );
  };

  const handleSaveEdit = editedFilm => {
    setData(data.map(film => (film.id === editedFilm.id ? editedFilm : film)));
    setSelectedFilm(null);
  };

  const handleSaveNewFilm = newFilm => {
    setData([...data, newFilm]);
    setIsAddingFilm(false);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/4 bg-gray-800 text-white p-4 h-screen">
        <button
          className="w-full mb-4 p-2 bg-teal-500 rounded"
          onClick={() => setIsAddingFilm(true)}>
          Tambah Film
        </button>
        <input
          type="text"
          className="w-full mb-4 p-2 bg-gray-200 rounded px-2 text-black"
          placeholder="Cari Film"
          value={search}
          onChange={e => setFilteredData(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-yellow-500 w-20 h-10 ">
          Cari
        </button>
        <h3 className="font-bold text-xl mb-4">Urutkan Berdasarkan</h3>
        <select
          className="border ml-2 px-2 py-1 text-black"
          value={sortCriteria}
          onChange={e => handleSort(e.target.value)}>
          <option value="nama">Nama</option>
          <option value="id">Nomor (ID)</option>
        </select>
      </div>
      <div className="w-3/4 bg-gray-100 p-6">
        <div className="grid grid-cols-2 gap-4">
          {data.map(film => (
            <div
              key={film.id}
              className={`group p-4 rounded bg-white shadow-lg hover:bg-yellow-500 hover:text-white flex flex-col items-center transition duration-200 ease-in-out`}>
              <img
                src={film.gambar}
                alt={`poster ${film.judul}`}
                className="h-44 w-36 rounded"
              />
              <h3 className="text-lg font-bold mt-2">{film.judul}</h3>
              <span className="block text-gray-700 group-hover:text-white">
                Tahun Rilis: {film.tahunRilis}
              </span>
              <button
                className="mt-2 bg-teal-500 text-white py-1 px-3 rounded-full hover:bg-teal-700 transition duration-200 ease-in-out w-32"
                onClick={() => handleInformation(film)}>
                Informasi
              </button>
              <button
                className="mt-2 bg-teal-500 text-white py-1 px-3 rounded-full hover:bg-teal-700 transition duration-200 ease-in-out w-32"
                onClick={() => handleEditFilm(film)}>
                Edit
              </button>
              <button
                className="mt-2 bg-teal-500 text-white py-1 px-3 rounded-full hover:bg-teal-700 transition duration-200 ease-in-out w-32"
                onClick={() => handleDeleteFilm(film.id)}>
                Hapus
              </button>
              <Heart
                className={`mt-2 ${
                  film.liked ? 'text-red-500' : 'text-gray-400'
                } cursor-pointer transition duration-200 ease-in-out`}
                onClick={() => toggleLike(film.id)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedFilm && (
        <PopUpEditFilm
          film={selectedFilm}
          onClose={() => setSelectedFilm(null)}
          onSave={handleSaveEdit}
        />
      )}
      {isAddingFilm && (
        <PopUpTambahFilm
          onClose={() => setIsAddingFilm(false)}
          onSave={handleSaveNewFilm}
        />
      )}
    </div>
  );
}
