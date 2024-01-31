function formatDateTimeRange(startDateTime, endDateTime) {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  if (startDate.toDateString() === endDate.toDateString()) {
    const formattedDate = startDate.toLocaleDateString("id-ID", {
      timeZone: "UTC",
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const startTime = startDate.toLocaleTimeString([], {
      timeZone: "UTC",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const endTime = endDate.toLocaleTimeString([], {
      timeZone: "UTC",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${formattedDate} (${startTime} - ${endTime})`;
  } else {
    const options = {
      timeZone: "UTC",
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const formattedStartDate = startDate.toDateString("id-ID", options);
    const formattedEndDate = endDate.toDateString("id-ID", options);
    return `${formattedStartDate} - ${formattedEndDate}`;
  }
}

function convertDateToIndoFormat(date) {
  const options = {
    timeZone: "UTC",
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return new Date(date).toLocaleDateString("id-ID", options);
}

function shareToWhatsApp(url) {
  var whatsappShareUrl =
    "whatsapp://send?text=" +
    window.location.origin +
    "/" +
    encodeURIComponent(url);
  window.open(whatsappShareUrl);
}

function copyToClipboard(url) {
  navigator.clipboard.writeText(window.location.origin + "/" + url);
}

export {
  formatDateTimeRange,
  convertDateToIndoFormat,
  shareToWhatsApp,
  copyToClipboard,
};
