import React, { useEffect, useState } from "react";
import "./index.scss";
import Logo from "../../assets/logoDNC.png";
import Carrinho from "../../assets/carrinhoCompras.png";
import Lupa from "../../assets/lupa.png";
import { Link, useNavigate } from "react-router-dom";
import StoreSection from "../StoreSection/StoreSection";

const StoreHeader = ({ data }) => {

  const [searchValue, setSearchValue] = useState()
  const [searchValueNumber, setSearchValueNumber] = useState('')
  const [allowSearch, setAllowSearch] = useState(false);
  const [alertValue, setAlertValue] = useState('')

  let navigate = useNavigate()
  

  function descerPagina() {
    window.scrollTo(0, 20);
  }

  function descerPaginaJogos() {
    window.scrollTo(0, 440);
  }

  function descerPaginaVideoGames() {
    window.scrollTo(0, 120);
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(e.target[0].value);
    searchValue == '' ? setAlertValue('*Campo não preenchido*') : setAlertValue('')
    console.log(searchValue);
    checkValue()
    greenLightToSearch()
    Search()
  };
    
    const checkValue = () => {
      data.map((item, index) => {
        searchValue.toLowerCase() == item.title.toLowerCase() && setSearchValueNumber(index + 1) 
        searchValue.toLowerCase() == item.abreviatedTitle.toLowerCase() && setSearchValueNumber(index + 1)
      })
    }

   

      const greenLightToSearch = () => {
        searchValueNumber != '' && setAllowSearch(true) 
        
      }

      
      
   
    
    console.log(searchValueNumber)
    console.log(searchValue)
    console.log(allowSearch)

      const Search = () => {
        if (allowSearch) { (
          navigate(`/productSelected/${searchValueNumber}`)
          
          
        )} 
      }
    
    
  

  

  return (
    <div className="container">
      <div className="header--superior">
        <Link to={"/mainPage"}>
          <img className="logo" src={Logo} alt="Logo DNC" />
        </Link>
        <img className="lupa" src={Lupa} alt="Lupa de busca" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="O que você está procurando?" />
          <p style={{width: '1250px',
        textAlign:'right',
        color:'royalblue'}}>{alertValue}</p>
          
          
          <button>
            <Link to={`/shopCart/1`}>
              <img
                className="carrinho"
                src={Carrinho}
                alt="Carrinho de compras"
              />
            </Link>
          </button>
        </form>
      </div>
      <div className="header--inferior">
        <h3 onClick={descerPagina} className="font--bold">Novidades</h3>
        <h3 onClick={descerPaginaJogos}>Jogos</h3>
        <h3 onClick={descerPaginaVideoGames}>Video Games</h3>
        <h3>Mesas Gamer</h3>
        <h3>Promoções</h3>
        <h3>Atendimento</h3>
      </div>
    </div>
  );
};

export default StoreHeader;
