import React, { useEffect, useState } from "react";
import Table from "rc-table";
import { DataGrid } from "@mui/x-data-grid";
import { useFetch } from "../useFetch";
import "./index.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Index({ columns, data, tablename }) {
  console.log("areeb");
  const [state, setState] = useState(0);
  // const [name, setName] = useState("");
  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };
  // const [age, setAge] = React.useState("");

  // const handleChanges = (event) => {
  //   setAge(event.target.value);
  // };
  var columnss = [];

  var columnswidth = [];
  console.log(data);
  for (let k = 0; k < data[0].length; k++) {
    columnswidth.push(30);
  }
  useEffect(() => {
    if (data.length == 1) {
      setState(1);
    } else if (data.length == 2) {
      setState(2);
    } else if (data.length == 3) {
      setState(3);
    } else if (data.length == 4) {
      setState(4);
    } else {
      setState(5);
    }
    console.log("state", state);
  }, [data]);

  // console.log(columnswidth);
  data.map((i) => {
    i.map((j, index) => {
      // console.log(index);
      if (j != null) {
        if (columnswidth[index] < j.length) {
          columnswidth[index] = j.length;
        }
      }
    });
  });
  // console.log(columnswidth);
  columnswidth.map((i, index) => {
    // console.log({
    //   headerName: columns[index],
    //   field: columns[index].toLowerCase(),
    //   width: 10 * i,
    // });
    columnss.push({
      headerName: columns[index],
      field: columns[index].toLowerCase(),
      width: 10 * i,
    });
  });
  var count = 0;
  var rows = data.map((i, index) => {
    count++;
    var row = { id: count };
    i.map((j, inde) => {
      row[columns[inde].toLowerCase()] = j;
    });
    return row;
  });
  // for (let i = 0; i < columnss.length; i++) {
  //   if (columnss[i]["width"] == 1) {
  //     columnss[i]["width"] = columnss[i]["headerName"].length * 10;
  //   }
  // }

  console.log(rows);
  console.log(columnss);
  // // columnnames.data.map((i)=>{
  // //   return {headerName:i[3],field:i[3],width:10*}
  // // })
  // const columns = [
  //   {
  //     headerName: "Name",
  //     field: "name",

  //     width: 10 * namewidth,
  //   },
  //   {
  //     headerName: "HomeStadium",
  //     field: "homestadium",

  //     width: 10 * homewidth,
  //   },
  //   {
  //     headerName: "WebSide",
  //     field: "webside",
  //     width: 10 * urlwidth,
  //   },
  // ];
  // useEffect(() => {}, [state]);

  return (
    <div className="table_main">
      {/* <Table columns={columns} data={data} />
       */}

      <div style={{ height: 350, width: "100%" }} className="table">
        <DataGrid
          rows={rows}
          columns={columnss}
          pageSize={state}
          rowsPerPageOptions={[10]}
          // checkboxSelection
        />
      </div>
    </div>
  );
}

export default Index;
