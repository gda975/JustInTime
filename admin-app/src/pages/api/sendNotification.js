import { firebaseAdmin } from "../../firebase/FirebaseAdmin";

export default async function handler(req, res) {
    const { title, notificationBody, topic } = req.body;
    const topicFormatted = topic.split(' ').join('_')

    const message = {
        notification: {
            title: title,
            body: notificationBody
          },
        android: {
            notification: {
              image: "logo192.png",
            },
          },
        topic: topicFormatted,
    };

    firebaseAdmin
        .messaging()
        .send(message)
        .then((response) => {
            res.status(200).json({message: response})
            
        })
        .catch((error) => {
            console.log(error)
            res.status(400).end()
        });

}