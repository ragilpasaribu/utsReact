/* eslint-disable react/prop-types */
import { useState } from "react";

export default function PopUpTambahFilm({ onClose, onSave }) {
  const [newFilm, setNewFilm] = useState({
    id: "",
    judul: "",
    gambar: "",
    tahunRilis: "",
    Genre: "",
    Durasi: "",
    Sinopsis: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFilm({ ...newFilm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newFilm);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-1/2 overflow-y-auto">
        <h2 className="text-2xl mb-4 font-bold">Tambah Film</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">ID</label>
            <input
              type="text"
              name="id"
              value={newFilm.id}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Judul</label>
            <input
              type="text"
              name="judul"
              value={newFilm.judul}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Gambar</label>
            <input
              type="text"
              name="gambar"
              value={newFilm.gambar}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Tahun Rilis</label>
            <input
              type="number"
              name="tahunRilis"
              value={newFilm.tahunRilis}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Genre</label>
            <input
              type="text"
              name="Genre"
              value={newFilm.Genre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Durasi</label>
            <input
              type="text"
              name="Durasi"
              value={newFilm.Durasi}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Sinopsis</label>
            <textarea
              name="Sinopsis"
              value={newFilm.Sinopsis}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded h-24"
              required
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="p-2 bg-gray-500 text-white rounded">
              Cancel
            </button>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
