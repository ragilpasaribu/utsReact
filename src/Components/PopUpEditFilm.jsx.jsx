/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function PopUpEditFilm({ film, onClose, onSave }) {
  const [editedFilm, setEditedFilm] = useState(film);

  useEffect(() => {
    setEditedFilm(film);
  }, [film]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedFilm({ ...editedFilm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedFilm);
  };

  if (!film) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4 font-bold">Edit Film</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Judul</label>
            <input
              type="text"
              name="judul"
              value={editedFilm.judul}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Genre</label>
            <input
              type="text"
              name="Genre"
              value={editedFilm.Genre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Durasi</label>
            <input
              type="text"
              name="Durasi"
              value={editedFilm.Durasi}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Sinopsis</label>
            <textarea
              name="Sinopsis"
              value={editedFilm.Sinopsis}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded h-24"
            />
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
