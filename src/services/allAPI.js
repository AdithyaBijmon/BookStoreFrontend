import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// guest user
    // register api - called by Auth component when register button clicked,content-type:"applicaton/json"
    
    export const registerAPI = async(reqBody)=>{
     return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
    }

    // login api
    // home page books api
    // all career api

// authorised users - user
    // view all books 
    // view single book
    // upload book
    // profile update
    // purchased selled books
    // approved books

// authorised users - admin
    // add career 
    // update admin
    // list books
    // list users
    // approve books


