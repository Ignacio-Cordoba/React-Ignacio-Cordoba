import {useForm} from "react-hook-form"
import "./contacto.css"
const Contacto = () => {
const{ register, handleSubmit} = useForm()


const enviar= (info)=>{
  console.log(info)
}

  return (
    <div>
      <form className="form-contacto" onSubmit={handleSubmit(enviar)}>
        <h1 className="titulo-form">Contacto</h1>
        <input className="nombre-form" type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
        <input className="email-form" type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
        <input className="telefono-form" type="telefono" placeholder="Ingresa tu telefono"  {...register("telefono")}/>
        <button className="button-enviar-form" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
