let FeedbackComponent=()=>{
    return(
        <>
         <div class="con" style={{backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)", padding:"20px"}} >
         <div style={{display:"flex", justifyContent:"space-between"}}>
         <div>
        <button class="btn rounded-3 float-center my-3 fs-5" style={{color:"white", width: "200px", border:"1px solid white"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <a href="/homepage" style={{color:"white"}}>Go back</a> 
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>
</div>
        
        <div class="main" className="rounded-3" style={{ width:"600px", margin:"70px auto", height:"600px", backgroundColor:"white"}}>
            <h1 className="center, fs-4, pb-4" style={{height: "20px", paddingTop:"30px", color:"#8fd3f4"}}>Feedback Form</h1>
             <table style={{margin:"50px"}}>
                <tr >
                    <td ><input className="form-control" type="text" placeholder="First Name" style={{marginRight:"5px",width:"250px",boxSizing:"border-box"}} /></td>
                    <td className=""><input className="form-control" type="text" placeholder="Last Name"  style={{width:"250px",boxSizing:"border-box"}}/></td>
                </tr>
                <tr className="p-2">
                    <td>
                        <input className="me-3" type="radio" name="gen" id="gmale"/>
                        <label  className="me-3" for="gmale"> Male</label>
                        <input className="me-3" type="radio" name="gen" id="gfemale"/>
                        <label for="gfemale"> Female</label>
                        
                    </td>
                <td><input className="form-control" type="date" name="" id="" /></td>
            </tr>
            <tr>
            <td className="p-2"><input className="form-control" type="number" placeholder="Contact No" /></td>
            <td className="p-2">
               <select className="form-control" name="City" id="city" aria-placeholder="City" >
               <option value="City">Choose City</option>
                <option value="City">Sangli</option>
                <option value="City">Miraj</option>
                <option value="City">Pune</option>
               </select>
            </td>
        </tr>
        <tr className="p-2">
            <td colspan="2">
                <label for="">Please Enter Your Feedback</label><br/>
                <textarea className="form-control" name="" id="" cols="60" rows="10"></textarea>
            </td>
        </tr>
        <tr className="p-2">
           
        </tr>
        <tr className="p-2">
            <td><button class="btn rounded-3 float-center my-3 fs-5" style={{color:"white", width: "200px",backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"}}>Submit</button>
            </td>
        </tr>
             </table>
        </div>
    </div>
    </div>
        </>
    )
}
export default FeedbackComponent;