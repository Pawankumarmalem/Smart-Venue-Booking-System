import "../styles/Profile.css";

function Profile() {

    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");
    const email = localStorage.getItem("email");

    return (

        <div className="profile-page">

            <div className="profile-card">

                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Profile"
                />

                <h2>{name}</h2>

                <p className="role">{role}</p>

                <div className="details">

                    <p><strong>Name :</strong> {name}</p>

                    <p><strong>Email :</strong> {email || "Not Available"}</p>

                    <p><strong>Role :</strong> {role}</p>

                </div>

            </div>

        </div>

    );
}

export default Profile;