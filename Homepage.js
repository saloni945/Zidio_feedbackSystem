let HomepageComponent=()=>{
    return(
        <>
        <div style={{backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)", width:"100%", height:"600px"}}>
         <h1  style={{display:"flex", justifyContent:"center", color:"white", paddingTop:"220px", fontSize:"60px"}}>FEEDBACK NOW</h1>
         <p style={{color:"white", fontsize:"25px"}}>Instead of focusing on the competition, focus on the customer, A satisfied customer is the best business strategy of all.</p>
          <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
            <div><button className="btn " style={{width:"200px",backgroundcolor:"transparent", color:"white", border:"1px solid white", marginRight:"10px"}}><a href="/login" style={{color:"white"}}>Log In</a></button></div>
            <div><button className="btn " style={{width:"200px",backgroundcolor:"transparent", color:"white", border:"1px solid white", marginRight:"10px"}}><a href="/signup" style={{color:"white"}}>Sign Up</a></button></div>
          </div>
        </div>
        </>
    )
}

export default HomepageComponent;