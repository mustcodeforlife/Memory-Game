import '../styles/Modal.css'

export default function Modal({modalIsOpen,modalMessage,setModalIsOpen}){

    return(
        modalIsOpen && (
            <div className="Modal">
                <div className="Content">
                    <h2>{modalMessage}</h2>
                    <button onClick={()=>setModalIsOpen(false)}> 
                        Retry!
                    </button>

                </div>
            </div>
        )

    );
}