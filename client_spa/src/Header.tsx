import React from 'react';

interface HeaderProps{
  title: string; // Obrigatório
}

// interface HeaderProps{
//   title?: string; // Opcional
// }

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}   

export default Header;