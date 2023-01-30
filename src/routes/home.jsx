import Modal from "../components/modal/modal";
import React,{useState,useEffect} from "react"
import rectangleModalHeader from "../assets/rectangleModalHeader.svg"
export const Home = () => {
  const [isModalOpen,setIsModalOpen]=useState(false);
const handleOpenClick=()=>{
  setIsModalOpen(true);
}
const closeModal=()=>{
  setIsModalOpen(false);
}
useEffect(() => {
  

  const handleEscClose = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  if (isModalOpen) {
   
    document.addEventListener('keydown', handleEscClose);
  }

  return () => {
    
    document.removeEventListener('keydown', handleEscClose);
  };
}, [isModalOpen]);
  return (
    <div className="bg-alpha">
      <h1>Home</h1>
       <Modal isOpen ={isModalOpen} onClose={closeModal}  title={"coinbase"} text={"Transaction for 0.008 ETH sign request"} notifications={"Type “carrot pizza” to sign your transaction"} />
       <button onClick={handleOpenClick} class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#appModal">open modal</button> 
    </div>
  );
};
