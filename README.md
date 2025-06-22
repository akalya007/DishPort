.header {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding:0px
}

.logo {
    width: 140px;
}

.nav-items {
    padding:  0px 20px;
}
.nav-items > ul > li {
    border-radius: 6px;
    transition: background-color 0.25s ease, color 0.25s ease;
}
.nav-items > ul {
    font-size: 24px;
    display: flex;
    list-style-type: none;
}
.nav-items > ul > li:hover {
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.nav-items > ul > li {
    padding: 10px;
    margin: 10px
}

.res-container {
    display: flex;
    flex-wrap: wrap;
}

.res-card {
    margin: 5px;
    padding: 5px;
    width: 200px;
    border: 1px solid black;
}

.res-card:hover {
    cursor: pointer;
    border: 1px solid black;
}

.search {
    padding: 10px;
    margin:10px
}

.res-logo {
    width: 100%;
    height: 150px;
    object-fit: cover;
}


.header {
    background-color: #ffffff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    padding: 12px 24px;
    border-radius: 6px;
    align-items: center; /* vertically center flex items */
}
.res-card {
    background-color: #fefefe;
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.res-card:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    transform: scale(1.05);
}

.filter-btn {
    /* border: 2px solid #ddd;
    border-radius: 6px;
    padding: 12px 16px;
    font-size: 16px;
    width: 100%;
    max-width: 400px; */
    margin:20px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
    cursor:pointer;
    padding:5px;
}

.filter-btn:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 6px #007bffaa;
}

.res-logo {
    border-radius: 8px 8px 0 0;
}

.res-container {
    justify-content: center; /* center cards nicely */
    gap: 12px; /* add consistent gap between cards */
}

.shimmer-container{
    display:flex;
    flex-wrap: wrap;
}
.shimmer-card{
    background-color:  #f0f0f0;
    height: 400px;
    width : 200px;
    margin:20px;
}


.user-card{
    padding:10px;
    border:1px solid;
}
 


