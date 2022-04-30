import React, { useEffect, useState } from "react";
import { useFetch } from "./components/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import { Counter } from "./features/counter/Counter";
import { useSelector, useDispatch } from "react-redux";
import { add, getData } from "./features/data/dataSlice";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "./components/table";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Divider from "@mui/material/Divider";

function App() {
  const [firstsearch, setFirstSearch] = useState(false);
  const [secondsearch, setSecondSearch] = useState(false);
  const [secondsearchresult, setSecondSearchResult] = useState("");
  const [clubname, setClubName] = useState("");
  const [username, setUsername] = useState("");
  const [thirdsearchresult, setThirdSearchResult] = useState("");
  const [thirdsearch, setThirdSearch] = useState(false);
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [fourthsearchresult, setFourthSearchResult] = useState("");
  const [fourthsearch, setFourthSearch] = useState(false);
  const [fifthsearchresult, setFifthSearchResult] = useState("");
  const [fifthsearch, setFifthSearch] = useState(false);
  const [stadiumname, setStadiumName] = useState("");
  const [position, setPosition] = useState("");
  const [sixthsearchresult, setSixthSearchResult] = useState("");
  const [sixthsearch, setSixthSearch] = useState(false);
  const [seventhsearchresult, setSeventhSearchResult] = useState("");
  const [seventhsearch, setSeventhSearch] = useState(false);
  const [city, setCity] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [eightsearchresult, setEightSearchResult] = useState("");
  const [eightsearch, setEightSearch] = useState(false);
  const { loading, products } = useFetch(
    "http://drstoneluffy12.pythonanywhere.com//getuniqueseasons"
  );
  const second = useFetch(
    "http://drstoneluffy12.pythonanywhere.com//getuniquecity"
  );
  const [dropdown2, setDropdown2] = useState("");
  const [ninthsearchresult, setNinthSearchResult] = useState("");
  const [ninthsearch, setNinthSearch] = useState(false);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDoB] = useState(null);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleDoB = (event) => {
    setDoB(event.target.value);
  };
  const handleDropDown2 = (event) => {
    setDropdown2(event.target.value);
  };
  const handleDropDown = (event) => {
    setDropdown(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleStadiumName = (event) => {
    setStadiumName(event.target.value);
  };
  const handleFName = (event) => {
    setFName(event.target.value);
  };

  const handleLName = (event) => {
    setLName(event.target.value);
  };
  const handleUser = (event) => {
    setUsername(event.target.value);
  };
  const [rating, setRating] = useState("");
  const handleRating = (event) => {
    setRating(event.target.value);
  };
  const [text, setText] = useState("");
  const handleText = (event) => {
    setText(event.target.value);
  };
  const [review, setReview] = useState(null);
  const handleReview = (event) => {
    setReview(event.target.value);
  };
  const [hometeam, setHometeam] = useState("");
  const handleHometeam = (event) => {
    setHometeam(event.target.value);
  };
  const [awayteam, setAwayteam] = useState("");
  const handleAwayteam = (event) => {
    setAwayteam(event.target.value);
  };
  const [match, setMatch] = useState(null);
  const handleMatch = (event) => {
    setMatch(event.target.value);
  };

  const [nationality, setNationality] = useState("");
  const handleNationality = (event) => {
    setNationality(event.target.value);
  };

  const handleClubName = (event) => {
    setClubName(event.target.value);
  };

  const [searchresult, setSearchResult] = useState("");
  const handleGetReview = (event) => {
    event.preventDefault();
    if (hometeam == "" || awayteam == "") {
      alert("Please fill all the inputs");
    } else {
      axios
        .post(
          `http://drstoneluffy12.pythonanywhere.com//givesreviewsdata?hometeam=${hometeam}&awayteam=${awayteam}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.length == 0) {
            alert("no results found");
          } else {
            setSearchResult(res.data.data);
            setFirstSearch(true);
          }
        });
    }
  };
  const handleInsert = (event) => {
    event.preventDefault();
    if (
      username == "" ||
      rating == "" ||
      text == "" ||
      review == "" ||
      hometeam == "" ||
      awayteam == "" ||
      match == ""
    ) {
      alert("Please fill all the inputs");
    } else {
      console.log(match.date);
      var mydate = new Date(match);
      console.log(
        mydate.getDate() + "-" + mydate.getMonth() + "-" + mydate.getFullYear()
      );
      mydate =
        mydate.getFullYear() + "-" + mydate.getMonth() + "-" + mydate.getDate();
      var reviewdate = new Date(review);
      reviewdate =
        reviewdate.getFullYear() +
        "-" +
        reviewdate.getMonth() +
        "-" +
        reviewdate.getDate();
      axios
        .post(
          `http://drstoneluffy12.pythonanywhere.com//insertdatareview?username=${username}&rating=${rating}&text=${text}&review=${reviewdate}&hometeam=${hometeam}&awayteam=${awayteam}&match=${mydate}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.status == "error") {
            alert(`Error : ${res.data.error}`);
          } else {
            alert("Successfuly executed");
          }
        });
    }
  };
  const handleGetPlayer = (event) => {
    event.preventDefault();
    if (hometeam == "" || nationality == "") {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          `http://drstoneluffy12.pythonanywhere.com//givesplayerdata?hometeam=${hometeam}&nationality=${nationality}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.length == 0) {
            alert("No result found");
          } else {
            setSecondSearchResult(res.data.data);
            setSecondSearch(true);
          }
        });
    }
  };

  const handleGetClubData = (event) => {
    event.preventDefault();
    if (clubname == "") {
      alert("Please fill the information");
    } else {
      axios
        .post(
          `http://drstoneluffy12.pythonanywhere.com//givesclubdata?clubname=${clubname}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.lenght == 0) {
            alert("No results found");
          } else {
            setThirdSearchResult(res.data.data);
            setThirdSearch(true);
          }
        });
    }
  };
  const handleGetPlayerData = (event) => {
    event.preventDefault();
    if (FName == "" || LName == "") {
      alert("Please filll the correct Fields");
    } else {
      axios
        .post(
          `http://drstoneluffy12.pythonanywhere.com//givesplayersdata?fname=${FName}&lname=${LName}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.lenght == 0) {
            alert("No results found");
          } else {
            setFourthSearchResult(res.data.data);
            setFourthSearch(true);
          }
        });
    }
  };

  const handleGetStadiumData = (event) => {
    event.preventDefault();
    if (stadiumname == "") {
      alert("Please Fill the correct information");
    } else {
      axios
        .post(
          `
http://drstoneluffy12.pythonanywhere.com//givesstadiumdata?name=${stadiumname}
`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.lenght == 0) {
            alert("No results found");
          } else {
            setFifthSearchResult(res.data.data);
            setFifthSearch(true);
          }
        });
    }
  };
  const handleGetPositonData = (event) => {
    event.preventDefault();
    if (position === "") {
      alert("Please fill the correct information");
    } else {
      axios
        .post(
          `
http://drstoneluffy12.pythonanywhere.com//givespositiondata?position=${position}
`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.lenght == 0) {
            alert("No results found");
          } else {
            setSixthSearchResult(res.data.data);
            setSixthSearch(true);
          }
        });
    }
  };

  const handleGetStadiumCityData = (event) => {
    event.preventDefault();
    if (city == "") {
      alert("Please select a city");
    } else {
      axios
        .post(
          `
http://drstoneluffy12.pythonanywhere.com//givesstadiumcitydata?city=${city}
`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.data.length == 0) {
            alert("Not found");
          } else {
            setSeventhSearchResult(res.data.data);
            setSeventhSearch(true);
          }
        });
    }
  };

  const handleGetDataBy = (event) => {
    event.preventDefault();
    if (dropdown == "") {
      alert("Please select a dropdown");
    } else {
      axios
        .post(
          `
http://drstoneluffy12.pythonanywhere.com//givesdataby?state=${dropdown}
`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.error) {
            alert("Not FOund");
          } else {
            setEightSearchResult(res.data.data);
            setEightSearch(true);
          }
        });
    }
  };

  const handleGetDataBy2 = (event) => {
    event.preventDefault();
    if (dropdown2 == "") {
      alert("Please select a dropdown2");
    } else {
      axios
        .post(
          `
http://drstoneluffy12.pythonanywhere.com//getuniqueseasonsdata?state='${dropdown2}'
`
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.data.error) {
            alert("Not FOund");
          } else {
            setNinthSearchResult(res.data.data);
            setNinthSearch(true);
          }
        });
    }
  };
  const handleInserts = (event) => {
    event.preventDefault();
    if (
      username == "" ||
      email == "" ||
      gender == "" ||
      dob == "" ||
      clubname == ""
    ) {
      alert("Please Fill the exact fields");
    } else {
      var dobdate = new Date(dob);
      dobdate =
        dobdate.getFullYear() +
        "-" +
        dobdate.getMonth() +
        "-" +
        dobdate.getDate();
      axios
        .post(
          `
http://drstoneluffy12.pythonanywhere.com//insertdatafan?username=${username}&email=${email}&clubname=${clubname}&dob=${dobdate}&gender=${gender}
`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.status == "error") {
            alert(`Error: ${res.data.error}`);
          } else {
            alert("Successfuly executed");
          }
        });
    }
  };

  useEffect(() => {
    console.log(second.products);
  }, [loading, second.loading]);

  if (loading && second.loading) {
    return (
      <div className="app">
        <div className="container">
          <div className="heading">Premium League </div>
          <div className="laoding">Loading Data From DataBase</div>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <div className="heading">Premier League </div>
        <div className="alldata">DataBase</div>
        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              {" "}
              Add a new user review on a match
            </div>
            <div className="input">
              <TextField
                id="outlined-name"
                label="Username"
                value={username}
                onChange={handleUser}
                className="inputSearch"
              />
              <TextField
                id="outlined-name"
                label="Rating"
                value={rating}
                onChange={handleRating}
                className="inputSearch"
              />
              <TextField
                id="outlined-name"
                label="Text"
                value={text}
                onChange={handleText}
                className="inputSearch"
              />
              {/* <TextField
              id="outlined-name"
              label="Review_Date"
              value={review}
              onChange={handleReview}
              className="inputSearch"
            /> */}
              <div className="date">
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  className="inputSearch date"
                >
                  <DatePicker
                    className="inputSearch date"
                    label="Review Date"
                    value={review}
                    onChange={(newValue) => {
                      setReview(newValue);
                    }}
                    sx={{ marginTop: 20 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <TextField
                id="outlined-name"
                label="Home_team"
                value={hometeam}
                onChange={handleHometeam}
                className="inputSearch"
              />
              <TextField
                id="outlined-name"
                label="Away_Team"
                value={awayteam}
                onChange={handleAwayteam}
                className="inputSearch"
              />
              {/* <TextField
              id="outlined-name"
              label="Match_Date"
              value={match}
              onChange={handleMatch}
              className="inputSearch"
            /> */}
              <div className="date">
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  className="inputSearch date"
                >
                  <DatePicker
                    className="inputSearch date"
                    label="Match Date"
                    value={match}
                    onChange={(newValue) => {
                      setMatch(newValue);
                    }}
                    sx={{ marginTop: 20 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <Button variant="contained" className="btn" onClick={handleInsert}>
              Insert
            </Button>
          </div>
        </article>

        {/* <Divider>CENTER</Divider> */}
        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading"> Register a user</div>
            <div className="input">
              <TextField
                id="outlined-name"
                label="Username"
                value={username}
                onChange={handleUser}
                className="inputSearch"
              />
              <TextField
                id="outlined-name"
                label="Email"
                value={email}
                onChange={handleEmail}
                className="inputSearch"
              />
              <TextField
                id="outlined-name"
                label="Gender"
                value={gender}
                onChange={handleGender}
                className="inputSearch"
              />
              {/* <TextField
              id="outlined-name"
              label="DoB"
              value={dob}
              onChange={handleDoB}
              className="inputSearch"
            /> */}
              <div className="date">
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  className="inputSearch date"
                >
                  <DatePicker
                    className="inputSearch date"
                    label="Date of Birth"
                    value={dob}
                    onChange={(newValue) => {
                      setDoB(newValue);
                    }}
                    sx={{ marginTop: 20 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <TextField
                id="outlined-name"
                label="ClubName"
                value={clubname}
                onChange={handleClubName}
                className="inputSearch"
              />
            </div>
            <Button variant="contained" className="btn" onClick={handleInserts}>
              Insert
            </Button>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              {" "}
              View existing reviews on a given match
            </div>
            <div className="input">
              <TextField
                id="outlined-name"
                label="Hometeam"
                value={hometeam}
                onChange={handleHometeam}
                className="inputSearch"
              />
              <TextField
                id="outlined-name"
                label="Awayteam"
                value={awayteam}
                onChange={handleAwayteam}
                className="inputSearch"
              />
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetReview}
            >
              Search
            </Button>
            <div className="alltable">
              {firstsearch ? (
                <Table
                  columns={searchresult.columns}
                  data={searchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              {" "}
              Show player with certain nationality and Home Team
            </div>
            <div className="input">
              <TextField
                id="outlined-name"
                label="Hometeam"
                value={hometeam}
                onChange={handleHometeam}
                className="inputSearch"
              />
              <TextField
                id="outlined-name"
                label="Nationality"
                value={nationality}
                onChange={handleNationality}
                className="inputSearch"
              />
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetPlayer}
            >
              Search
            </Button>
            <div className="alltable">
              {secondsearch ? (
                <Table
                  columns={secondsearchresult.columns}
                  data={secondsearchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              {" "}
              View a given team information
            </div>
            <div className="input">
              <TextField
                id="outlined-name"
                label="Name"
                value={clubname}
                onChange={handleClubName}
                className="inputSearch"
              />
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetClubData}
            >
              Search
            </Button>
            <div className="alltable">
              {thirdsearch ? (
                <Table
                  columns={thirdsearchresult.columns}
                  data={thirdsearchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              {" "}
              View a certain player information
            </div>
            <div className="input">
              <TextField
                id="outlined-name"
                label="FName"
                value={FName}
                onChange={handleFName}
                className="inputSearch"
              />
              <TextField
                id="outlined-name"
                label="LName"
                value={LName}
                onChange={handleLName}
                className="inputSearch"
              />
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetPlayerData}
            >
              Search
            </Button>
            <div className="alltable">
              {fourthsearch ? (
                <Table
                  columns={fourthsearchresult.columns}
                  data={fourthsearchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              {" "}
              identify home team by stadium name
            </div>
            <div className="input">
              <TextField
                id="outlined-name"
                label="Name"
                value={stadiumname}
                onChange={handleStadiumName}
                className="inputSearch"
              />
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetStadiumData}
            >
              Search
            </Button>
            <div className="alltable">
              {fifthsearch ? (
                <Table
                  columns={fifthsearchresult.columns}
                  data={fifthsearchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              view all player with certain postion
            </div>
            <div className="input">
              <TextField
                id="outlined-name"
                label="Position"
                value={position}
                onChange={handlePosition}
                className="inputSearch"
              />
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetPositonData}
            >
              Search
            </Button>
            <div className="alltable">
              {sixthsearch ? (
                <Table
                  columns={sixthsearchresult.columns}
                  data={sixthsearchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              view all teams in a given city
            </div>
            <div className="input">
              <div className="inputs_select">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    label="City"
                    onChange={handleCity}
                  >
                    {second.products.data.data.map((row) => {
                      // console.log(row);
                      return <MenuItem value={row[0]}>{row[0]}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetStadiumCityData}
            >
              Search
            </Button>
            <div className="alltable">
              {seventhsearch ? (
                <Table
                  columns={seventhsearchresult.columns}
                  data={seventhsearchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading">
              {" "}
              Select data By Top 10 Teams
            </div>
            <div className="inputs_select">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dropdown}
                  label="By"
                  onChange={handleDropDown}
                >
                  <MenuItem value={10}>Home matches Won</MenuItem>
                  <MenuItem value={20}>Away matches Won</MenuItem>
                  <MenuItem value={30}>All Matches Won</MenuItem>
                  <MenuItem value={40}>Yellow Cards</MenuItem>
                  <MenuItem value={50}>Shots</MenuItem>
                  <MenuItem value={60}>Fouls</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetDataBy}
            >
              Search
            </Button>
            <div className="alltable">
              {eightsearch ? (
                <Table
                  columns={eightsearchresult.columns}
                  data={eightsearchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>

        <article className="review">
          <div className="insertdata">
            <div className="heading insertheading"> Select data By Seasons</div>
            <div className="inputs_select">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dropdown2}
                  label="By"
                  onChange={handleDropDown2}
                >
                  {products.data.data.map((row) => {
                    return <MenuItem value={row}>{row}</MenuItem>;
                  })}

                  {/* <MenuItem value={20}>Away matches Won</MenuItem>
                <MenuItem value={30}>All Matches Won</MenuItem>
                <MenuItem value={40}>Yellow Cards</MenuItem>
                <MenuItem value={50}>Shots</MenuItem>
                <MenuItem value={60}>Fouls</MenuItem> */}
                </Select>
              </FormControl>
            </div>
            <Button
              variant="contained"
              className="btn"
              onClick={handleGetDataBy2}
            >
              Search
            </Button>
            <div className="alltable">
              {ninthsearch ? (
                <Table
                  columns={ninthsearchresult.columns}
                  data={ninthsearchresult.data}
                  tablename="givereviews"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
