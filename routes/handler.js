const express = require("express");
const router = express.Router();
const db = require("../config/db");
const cors = require("cors");
router.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
router.get("/user", async (req, res) => {
  db.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = "SELECT * FROM User";
      conn.query(qry, (err, result) => {
        conn.release();
        if (err) throw err;

        res.send(JSON.stringify(result));
        console.log(result);
      });
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/user", async (req, res) => {
  db.getConnection((err, conn) => {
    const email = req.body.email;
    const password = req.body.password;
    const isManager = req.body.isManager;
    if (err) throw err;

    try {
      const qry =
        "INSERT INTO User (email, password, isManager) VALUES (?,?,?)";
      conn.query(qry, [email, password, isManager], (err, result) => {
        conn.release();
        if (err) throw err;
        console.log(result);
      });
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});
router.delete("/user/:id", async (req, res) => {
  db.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = "DELETE FROM User WHERE user_id = ?";
      conn.query(qry, req.params.id, (err, result) => {
        conn.release();
        if (err) throw err;

        res.send(JSON.stringify(result));
        console.log(result);
      });
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});
router.get("/product", async (req, res) => {
  db.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = "SELECT * FROM Product";
      conn.query(qry, (err, result) => {
        conn.release();
        if (err) throw err;

        res.send(JSON.stringify(result));
        console.log(result);
      });
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/product", async (req, res) => {
  db.getConnection((err, conn) => {
    const product_name = req.body.product_name;
    const family = req.body.family;
    const code = req.body.code;
    if (err) throw err;

    try {
      const qry =
        "INSERT INTO Product (product_name, family, code) VALUES (?,?,?)";
      conn.query(qry, [product_name, family, code], (err, result) => {
        conn.release();
        if (err) throw err;
        console.log(result);
      });
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});

router.get("/safety", async (req, res) => {
  db.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = "SELECT * FROM Safety";
      conn.query(qry, (err, result) => {
        conn.release();
        if (err) throw err;

        res.send(JSON.stringify(result));
        console.log(result);
      });
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/safety", async (req, res) => {
  db.getConnection((err, conn) => {
    const type = req.body.type;
    const area = req.body.area;
    const incident_date = req.body.incident_date;
    const process = req.body.process;
    const originName = req.body.originName;
    const approveName = req.body.approveName;
    const description = req.body.description;
    const escalationName = req.body.escalationName;
    const targetDate = req.body.targetDate;
    const resolveDate = req.body.resolveDate;
    if (err) throw err;

    try {
      const qry =
        "INSERT INTO Safety (type, area, incident_date, process, originName, approveName, description, escalationName,targetDate,resolveDate) VALUES (?,?,?,?,?,?,?,?,?,?)";
      conn.query(
        qry,
        [
          type,
          area,
          incident_date,
          process,
          originName,
          approveName,
          description,
          escalationName,
          targetDate,
          resolveDate,
        ],
        (err, result) => {
          conn.release();
          if (err) throw err;
          console.log(result);
        }
      );
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});

router.get("/tracking", async (req, res) => {
  db.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = "SELECT * FROM Tracking";
      conn.query(qry, (err, result) => {
        conn.release();
        if (err) throw err;

        res.send(JSON.stringify(result));
        console.log(result);
      });
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/tracking", async (req, res) => {
  db.getConnection((err, conn) => {
    const operator = req.body.operator;
    const area = req.body.area;
    const shift = req.body.shift;
    const date_tracked = req.body.date_tracked;
    const time_tracked = req.body.time_tracked;
    const target = req.body.target;
    const cTarget = req.body.cTarget;
    const cActual = req.body.cActual;
    const good = req.body.good;
    const bad = req.body.bad;
    const badCode = req.body.badCode;
    const downTime = req.body.downTime;
    const dTimeCode = req.body.dTimeCode;
    const comment = req.body.comment;

    if (err) throw err;

    try {
      const qry =
        "INSERT INTO Tracking (operator, area, shift, date_tracked, time_tracked, target, cTarget, cActual, good, bad,badCode,downTime,dTimeCode,comment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
      conn.query(
        qry,
        [
          operator,
          area,
          shift,
          date_tracked,
          time_tracked,
          target,
          cTarget,
          cActual,
          good,
          bad,
          badCode,
          downTime,
          dTimeCode,
          comment,
        ],
        (err, result) => {
          conn.release();
          if (err) throw err;
          console.log(result);
        }
      );
    } catch (error) {
      console.log(err);
      res.end();
    }
  });
});

module.exports = router;

// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const db = require("./config/db");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// app.post("/user", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const isManager = req.body.isManager;

//   db.query(
//     "INSERT INTO User (email, password, isManager) VALUES (?,?,?)",
//     [email, password, isManager],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.get("/user", (req, res) => {
//   db.query("SELECT * FROM User", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.get("/safety", (req, res) => {
//   db.query("SELECT * FROM Safety", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.get("/product", (req, res) => {
//   db.query("SELECT * FROM Product", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.get("/tracking", (req, res) => {
//   db.query("SELECT * FROM Tracking", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.listen(3001, () => {
//   console.log("yay server is running on port 3001");
// });
