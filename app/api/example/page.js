import { getProviders } from "next-auth/react"

export default async function handler(req, res) {
    try {
      const providers = await getProviders()
      console.log("Providers", providers)
      
      if (res) {
        res.status(200).json(providers)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Internal Server Error" })
    }
  }
 



// import { getProviders } from "next-auth/react"

// const page = () => {
//     async (req, res) => {
//     const providers = await getProviders()
//     console.log("Providers", providers)
//     }
//     return (
//         <div>
//             {providers}
//         </div>
//     )
// }

// export default page
