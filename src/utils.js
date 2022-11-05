import definePopupClass from "./Popup";

const offsetWayPoint = 250;

const EVENT_CHURCH = "church";
const EVENT_HALL = "hall";

const simplyCountdownConfig = {
  year: 2022,
  month: 12,
  day: 26,
  hours: 11,
  minutes: 0,
  seconds: 0,
  countUp: true,
};

const remainderButtonConfig = {
  name: "Jothi and Jijo wedding",
  description: "Jothi and Jijo wedding",
  startDate: "2022-12-26",
  endDate: "2022-12-26",
  startTime: "11:00",
  endTime: "14:00",
  location:
    "Sri Mulam Club, GX36+33G, CV Raman Pillai Rd, Near Tagore Theatre Thiruvananthapuram, Vazhuthacaud, Thiruvananthapuram, Kerala 695010, India",
  label: "Add to Calendar",
  options: [
    "Apple",
    "Google",
    "iCal",
    "Microsoft365",
    "MicrosoftTeams",
    "Outlook.com",
    "Yahoo",
  ],
  timeZone: "Asia/Kolkata",
  trigger: "click",
  inline: true,
  listStyle: "modal",
  iCalFileName: "Reminder-Event",
};

const generateWayPoint = function (wayPointElem, customEffect) {
  new window.Waypoint({
    element: wayPointElem.value,
    handler: function () {
      wayPointElem.value.classList.add("animate__animated");
      if (customEffect) {
        wayPointElem.value.classList.add(customEffect);
      } else {
        wayPointElem.value.classList.add("animate__fadeIn");
      }
      wayPointElem.value.classList.add("animate__fast");
    },
    offset: offsetWayPoint,
  });
};

const getMapInstance = function (mapRef, coords) {
  return new window.google.maps.Map(mapRef.value, {
    zoom: 15,
    center: new window.google.maps.LatLng(coords.lat, coords.lng),
    mapTypeControl: false,
  });
};

const addInfoWindow = function (map, coords, type, windowWidth) {
  // Create marker
  new window.google.maps.Marker({
    position: coords,
    map,
  });
  // Create popup
  let content;
  let offset = {};
  if (type == EVENT_CHURCH) {
    content =
      "<div> Wedding : St. Peter's Jacobite Syrian Orthodox Simhasana Cathedral </div><br />";
    offset = {
      left: windowWidth > 1000 ? -95 : 0,
      top: -155,
    };
  } else {
    content =
      "<div> Reception : Sri Mulam Club, Near Tagore Theatre, Vazhuthacaud </div><br />";
    offset = {
      left: windowWidth > 1000 ? -95 : 0,
      top: 225,
    };
  }
  content += `<a target="_blank" href="http://www.google.com/maps/place/${coords.lat},${coords.lng}"> View directions </a>`;

  let contentElem = document.createElement("div");
  contentElem.innerHTML = content;

  let Popup = definePopupClass();
  let popup = new Popup(
    new window.google.maps.LatLng(coords.lat, coords.lng),
    contentElem,
    offset
  );
  popup.setMap(map);
};

export {
  generateWayPoint,
  getMapInstance,
  addInfoWindow,
  remainderButtonConfig,
  simplyCountdownConfig,
  EVENT_CHURCH,
  EVENT_HALL,
};
