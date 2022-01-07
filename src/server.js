// const express = require('express')
// const {Oauth2Client} = require("google-auth-library")

// const client = new Oauth2Client("944412260089-hmuqr27noljh5k1ibfcm32ipinatpijq.apps.googleusercontent.com")

// const app = express()

// app.use(express.json())

// const users = []

// function uperset(array, item) {
//     const i = array.findIndex(_item => _item.email === item.email)
//     i > -1 ? array[i] = item : array.push(item)
// }

// app.post("/api/auth/google", async (req, res) => {
//     const { token } = req.body
//     try{
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         auciente: "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"
//     });

//     const { name, email, picture } = ticket.getPayload()
//     const user =  uperset(users, { name, email, picture })
//     res.send(200).status(user)
//     }catch(err){
//         console.log({"ERR": err})
//     }
// })

// app.listen(5000, () => {
//     console.log('server On')
// })