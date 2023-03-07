import React from 'react';

function DeletePopUp(props) {
  const handleDeleteBlog = () => {}
  
  const handleCancelDeleteBlog = () => {
    props.onClose();
  }
  return (
    <div className="fixed inset-0 flex w-screen h-screen bg-black/60 z-50">
      <div className="flex flex-col m-auto w-80 h-96 bg-white rounded-2xl">
        <div className="h-1/2 bg-pastel-red rounded-tl-2xl rounded-tr-2xl"></div>
        <div className="flex flex-col items-center justify-evenly h-1/2">
          <h3 className="font-extrabold text-2xl">Delete File</h3>
          <p className="text-light-gray">Sure you want to delete</p>
          <div className="flex items-center gap-3">
            <button className="bg-pastel-red text-very-light-gray px-5 py-2 rounded-full hover:opacity-90" onClick={handleDeleteBlog}>Delete</button>
            <button className="bg-eerie-black text-very-light-gray px-5 py-2 rounded-full hover:opacity-90" onClick={handleCancelDeleteBlog}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;