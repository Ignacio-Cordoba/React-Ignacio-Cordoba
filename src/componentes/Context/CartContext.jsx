import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const Agregar = (item, quantity) => {
    const itemAgregado = { ...item, quantity };
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.quantity += quantity;
      setCarrito(nuevoCarrito);
    } else {
      nuevoCarrito.push(itemAgregado);
      setCarrito(nuevoCarrito);
    }
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{ carrito, Agregar, cantidadCarrito, precioTotal, vaciarCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};
