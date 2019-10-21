module.exports = (app, db) => {
    app.post("/", (req, res) => {
        const note = { text: req.body.text, title: req.body.title };
        db.collection('notes').insert(note, (err, result) => {
            if (err)
                console.log(err + " this error has occured");
            else
                console.log(result);

        });
        res.status(200).send('Bon Jour');
        
    });

    app.get("/", (req, res) => {
        db.collection('notes').findOne({ '_id': ObjectId("5d88ad24c6795b79506aa531") }, (err, result) => {
            if (err)
                console.log(err + " this error has occured");
            else {
                res.send(result);
                console.log(result);
            }
        });
    });

};
