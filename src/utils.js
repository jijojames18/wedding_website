const offsetWayPoint = 250;

const simplyCountdownConfig = {
  year: 2022,
  month: 12,
  day: 26,
  countUp: true,
};

const remainderButtonConfig = {
  name: "Add the title of your event",
  description: "A nice description does not hurt",
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
    zoom: 19,
    center: new window.google.maps.LatLng(coords.lat, coords.lng),
  });
};

const addMarker = function (map, coords) {
  return new window.google.maps.Marker({
    position: coords,
    map,
  });
};

export {
  generateWayPoint,
  getMapInstance,
  addMarker,
  remainderButtonConfig,
  simplyCountdownConfig,
};
