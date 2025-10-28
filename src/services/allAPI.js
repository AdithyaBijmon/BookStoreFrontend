import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// ---------guest user----------
// register api - called by Auth component when register button clicked,content-type:"applicaton/json"

export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

// login api

export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

// google login api
export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/google-login`, reqBody)
}
// home page books api
export const getHomeBooksAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-books`)
}
// all career api

// authorised users - ---------user------------

// upload book
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}
// view all books 
export const getAllBooksAPI = async (search, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-books?search=${search}`, {}, reqHeader)
}
// view single book - called by view component when it load in browser
export const getSingleBookAPI = async (bookID, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/book/${bookID}/view`, {}, reqHeader)
}

// user uploaded book
export const getAllUserUploadBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-books`, {}, reqHeader)
}

// user purchased book
export const getAllUserPurchasedBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-bought-books`, {}, reqHeader)
}

// remove user book
export const removeUserUploadBookAPI = async (bookID, reqHeader) => {
    return await commonAPI("DELETE", `${SERVERURL}/user-book/${bookID}/remove`, {}, reqHeader)
}


// profile update
// purchased selled books
// approved books

// authorised users ---------- admin----------
// add career 
// update admin
// list books
export const getAllBooksAdminAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/admin-all-books`, {}, reqHeader)
}
// list users
export const getAllUsersAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-users`, {}, reqHeader)
}
// approve books
export const approveBookStatusAPI = async (reqBody,reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/admin/book/approve`,reqBody,reqHeader)
}


