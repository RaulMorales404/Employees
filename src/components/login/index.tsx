import { useLogin } from "../customHooks/useLogin/useLogin";

export const Login = () => {
    const { user, password, setPassword, setUser, doLogin } = useLogin();
    return (
        <div className="container">
            <div className="row mt-5">
                <div className=" mt-5 col-md-6">
                    <img style={{ width: "100%" }} src={require('../../assets/undraw_coffee_break_h3uu.png')} alt="img" />
                </div>
                <form className=" col-md-6 mt-5" >
                    <div className="col-md-8 mt-5">
                        <label className="form-label">Usuario</label>
                        <input type="text" id="user" className="form-control" value={user} onChange={(event) => { setUser(event.target.value) }} placeholder="Roberto" />
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">Contraseña</label>
                        <input type="password" id="password" className="form-control" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="Roberto123" />
                    </div>
                    <div className="col-8">
                        <button className="btn btn-primary col-md-3 col-ms-12 mt-3 offset-md-9" onClick={doLogin} type="button">Iniciar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

