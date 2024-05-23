let LoginComponent=()=>{
    return(
        <>
        <div style={{display:"flex", height:"600px"}}>
            <div style={{backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)", width:"45%", paddingTop:"230px"}} >
                <p style={{color:"white"}}>Go to Sign Up  <button className="btn " style={{backgroundcolor:"transparent", color:"white", border:"1px solid white", marginLeft:"10px"}}><a href="/signup" style={{color:"white"}}>SIGN UP</a></button></p>
                <p style={{color:"white"}}>  <button className="btn " style={{backgroundcolor:"transparent", color:"white", border:"1px solid white", marginRight:"10px"}}><a href="/feedback" style={{color:"white"}}>FEEDBACK</a></button>Go to Feedback form</p>
                 <hr style={{marginLeft:"130px", border:"1px solid white"}}/>
            </div>
        <div class="form-control mx-auto p-4" style={{width: "500px", height: "305px",border:"none", marginTop:"130px"}}>
            <h1 class=" mb-4 " style={{color:"#8fd3f4"}}>LOGIN FORM</h1>
            <div class="form-floating mb-3">
                <input type="email" class="form-control rounded-0" style={{backgroundColor:"#f2fffc", border:"none"}} id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="text" class="form-control rounded-0 mb-3 " style={{backgroundColor:"#f2fffc", border:"none"}} id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Username</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control rounded-0" style={{backgroundColor:"#f2fffc", border:"none"}} id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
              <button type="button" class="btn rounded-3 float-center my-3 fs-5" style={{color:"white", width: "200px",backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"}}>Login</button>

        </div>
        </div>
        </>
    )
}
export default LoginComponent;