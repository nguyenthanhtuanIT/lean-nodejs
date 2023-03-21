import connection from '../configs/connectDB.js'


let dashboard = (req, res) => {
    var users = [];
    // simple query
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            results.map((user) => {
                users.push({
                    name: user.full_name
                });
            });

            return res.render('index.ejs', { dataUsers: JSON.stringify(users) })
        }
    );

    console.log(users);
}

export default dashboard;