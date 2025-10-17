import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// guest user
    // register api - called by Auth component when register button clicked,content-type:"applicaton/json"
    
    export const registerAPI = async(reqBody)=>{
     return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
    }

    // login api

    export const loginAPI = async(reqBody)=>{
     return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
    }
    
    // google login api
    export const googleLoginAPI = async(reqBody)=>{
     return await commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
    }
    // home page books api
    // all career api

// authorised users - user
    // view all books 
    // view single book
    // upload book
    export const addBookAPI = async(reqBody,reqHeader)=>{
     return await commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
    }
    // profile update
    // purchased selled books
    // approved books

// authorised users - admin
    // add career 
    // update admin
    // list books
    // list users
    // approve books


