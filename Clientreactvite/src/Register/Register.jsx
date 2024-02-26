import { useState } from "react"

export default function Register () {

    const [username, setUsername] = useState("");
    const [passsword, setPassword] = useState("");

    return(
        <div className="bg-blue-700 text-white h-screen flex items-center">
            <form className="w-64 mx-auto mb-12">
                <input
                    id="username"
                    className="block w-full rounded-sm p-2 mb-2 border"
                    type="text"
                    placeholder="username"
                    onChange={(ev) => setUsername(ev.target.value)}
                    value={username}
                />
                <input
                    id="email"
                    className="block w-full rounded-sm p-2 mb-2 border"
                    type="text"
                    placeholder="email"
                    value={passsword}
                    onChange={(ev) => setPassword(ev.target.value)}
                    
                    />
                <button className="bg-blue-500 text-white w-full rounded-sm">Register</button>
            </form>
        </div>
    )
}