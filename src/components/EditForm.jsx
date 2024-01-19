import { useState } from 'react'



function EditForm({ comicToEdit, onPatchComic, setComicToEdit}) {

  const [formData, setFormData] = useState(comicToEdit)

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    const config = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
    fetch(`http://localhost:8004/comics/${comicToEdit.id}`, config)
      .then(response => response.json())
      .then(onPatchComic)
    setComicToEdit(null)
  }


  return (

    <form onSubmit={handleSubmit} className="comic-form">

      <h2>Edit this Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input onChange={handleChange} value={formData.image_url} type="text"name="image_url" />

      <label htmlFor="title">Title: </label>
      <input onChange={handleChange} value={formData.title} name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input onChange={handleChange} value={formData.issue} name="issue" type="number" />

      <label htmlFor="description">Description: </label>
      <input onChange={handleChange} value={formData.description} name="description" />

      <input type="submit" value="Update Issue" />

    </form>

  )
}

export default EditForm
