import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { userService } from "../../../Services/user.service.js";

export default function ProfileEdit() {
  
  const navigate = useNavigate()
  const [user, setUser] = useState([])


  useEffect(() => {
		userService.getUser()
			.then(response => {
				console.log(response.data.body)
				setUser(response.data.body)
			})
			.catch(err => console.log(err))
	}, [])

  const onChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  }

	const onSubmit = (e) => {
		e.preventDefault();
    console.log(user)
    userService.editUser(user)
    .then(response => {navigate('/user/profile')})
    .catch(err => console.log(err))
	}

  
  return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Profile Edit</h1>
				<form onSubmit={onSubmit}>
					<div className="input-wrapper">
						<label htmlFor="firstName">Firstname</label>
						<input type="text" name="firstName" value={user.firstName} onChange={onChange}/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="lastName">Lastname</label>
						<input type="text" name="lastName" value={user.lastName} onChange={onChange}/>
					</div>
					<button className="sign-in-button">
						Update
					</button>
				</form>
			</section>
		</main>
  )
}
