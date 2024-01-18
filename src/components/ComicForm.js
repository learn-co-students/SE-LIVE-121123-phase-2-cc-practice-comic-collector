import { useState } from 'react'

const initialState ={
  image_url: "",
  title: "",
  issue: "",
  description: ""
}

function ComicForm({ onSubmitComic }) {

  const [formData, setFormData] = useState(initialState)

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
    fetch("http://localhost:8004/comics", config)
      .then(response => response.json())
      .then(onSubmitComic)
    setFormData(initialState)
  }


  return (

    <form onSubmit={handleSubmit} className="comic-form">

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input onChange={handleChange} value={formData.image_url} type="text"name="image_url" />

      <label htmlFor="title">Title: </label>
      <input onChange={handleChange} value={formData.title} name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input onChange={handleChange} value={formData.issue} name="issue" type="number" />

      <label htmlFor="description">Description: </label>
      <input onChange={handleChange} value={formData.description} name="description" />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
