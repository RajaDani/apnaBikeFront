// import { React, Component } from "react";
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// import { Button } from "reactstrap";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import SearchBox from "@seanhouli/react-mapbox-search";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaWFtZGV2ZWxvcGVyODg5IiwiYSI6ImNreHU4c2diMzZsOWEyd3J5MGtpcWJ2ZGUifQ.Pg2tHt2XWkrO6As17w7RDA";
// var map = new mapboxgl.Map({
//   container: "YOUR_CONTAINER_ELEMENT_ID",
//   style: "mapbox://styles/mapbox/streets-v11",
// });

export default function GoogleApiRapper() {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiaWFtZGV2ZWxvcGVyODg5IiwiYSI6ImNreHU4c2diMzZsOWEyd3J5MGtpcWJ2ZGUifQ.Pg2tHt2XWkrO6As17w7RDA",
  });

  // const Geocoder = new MapboxGeocoder({
  //   // Initialize the geocoder
  //   accessToken:
  //     "pk.eyJ1IjoiaWFtZGV2ZWxvcGVyODg5IiwiYSI6ImNreHU4c2diMzZsOWEyd3J5MGtpcWJ2ZGUifQ.Pg2tHt2XWkrO6As17w7RDA", // Set the access token
  //   mapboxgl: ReactMapboxGl, // Set the mapbox-gl instance
  //   marker: true, // Do not use the default marker style
  //   placeholder: "Search for places in Berkeley", // Placeholder text for the search bar
  //   bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
  //   proximity: {
  //     longitude: -122.25948,
  //     latitude: 37.87221,
  //   }, // Coordinates of UC Berkeley
  // });

  return (
    <>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "80vh",
          width: "80vw",
          marginLeft: "-300px",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[32.9328, 72.863]} />
        </Layer>

        <Marker coordinates={[32.9328, 72.863]} anchor="bottom">
          <img src="logo.png" />
        </Marker>

        {/* <Geocoder /> */}
      </Map>

      <SearchBox
        token={
          "pk.eyJ1IjoiaWFtZGV2ZWxvcGVyODg5IiwiYSI6ImNreHU4c2diMzZsOWEyd3J5MGtpcWJ2ZGUifQ.Pg2tHt2XWkrO6As17w7RDA"
        }
        country="Pakistan"
        callback={({ location, event }) => {
          // location object from mapbox
          // event onMouseDown supplied if suggestion clicked
        }}
        selectColor="#ef4836"
      />
    </>
  );
}

// export default class GoogleApiRapper extends Component {

//   render() {
//     return (
//       <>
//         <Map
//           style="mapbox://styles/mapbox/streets-v9"
//           containerStyle={{
//             height: "100vh",
//             width: "100vw",
//           }}
//         >
//           <Layer
//             type="symbol"
//             id="marker"
//             layout={{ "icon-image": "marker-15" }}
//           >
//             <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
//           </Layer>
//         </Map>
//       </>
//     );
//   }
// constructor(props) {
//   super(props);
//   this.state = {
//     address: "",
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//     mapCenter: {
//       lat: 32.9314,
//       lng: 72.84458,
//     },
//   };
//   this.getLocation = this.getLocation.bind(this);
// }

// // x = document.getElementById("demo");

// getLocation = () => {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     console.log("Latitude is :", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);
//     var x = this.state.mapCenter;
//     console.log(x);
//     // this.setState({
//     //   mapCenter: position.coords.latitude,
//     //   // mapCenter: {
//     //   //   lat: position.coords.latitude,
//     //   //   lng: position.coords.longitude,
//     //   // },
//     // });
//   });

//   // if (navigator.geolocation) {
//   //   navigator.geolocation.getCurrentPosition(showPosition);
//   // } else {
//   //   x.innerHTML = "Geolocation is not supported by this browser.";
//   // }
// };

// // showPosition(position) {
// //   x.innerHTML =
// //     "Latitude: " +
// //     position.coords.latitude +
// //     "<br>Longitude: " +
// //     position.coords.longitude;
// // }

// handleChange = (address) => {
//   this.setState({ address });
// };

// handleSelect = (address) => {
//   geocodeByAddress(address)
//     .then((results) => getLatLng(results[0]))
//     .then((latLng) => {
//       console.log("Success", latLng);
//       this.setState({ address });
//       this.setState({
//         mapCenter: latLng,
//       });
//     })
//     .catch((error) => console.error("Error", error));
// };

// render() {
//   return (
//     <div id="googleMap" style={{ height: "80vh", width: "900px !important" }}>
//       <Button onClick={this.getLocation} outline>
//         Get my Location
//       </Button>

//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({
//           getInputProps,
//           suggestions,
//           getSuggestionItemProps,
//           loading,
//         }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: "Search Places ...",
//                 className: "location-search-input",
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map((suggestion) => {
//                 const className = suggestion.active
//                   ? "suggestion-item--active"
//                   : "suggestion-item";
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: "#fafafa", cursor: "pointer" }
//                   : { backgroundColor: "#ffffff", cursor: "pointer" };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//       <Map
//         google={this.props.google}
//         initialCenter={{
//           lat: this.state.mapCenter.lat,
//           lng: this.state.mapCenter.lng,
//         }}
//         center={{
//           lat: this.state.mapCenter.lat,
//           lng: this.state.mapCenter.lng,
//         }}
//       >
//         <Marker
//           position={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng,
//           }}
//         />
//       </Map>
//     </div>
//   );
// }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyA7s-pczSBWzAHzer2TpF6neMyYjVYXEgk",
// })(MapContainer);
