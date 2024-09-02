function DeleteRecord(recordId, activeTab) {
  // console.log(recordId)
  // console.log(activeTab)

  const url = `https://goodreadfdm.vercel.app/${activeTab}/${recordId}`;
  const jwt = localStorage.getItem("jwt");
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({ __id: recordId }),
  })
    .then((response) => {
      if (data.errorMessage === "invalid token") {
        alert("This session is Expired\nYou will be redirected to login page");
        window.location.reload();
      }
      if (!response.ok) {
        alert(
          "Invalid or missing token. Please log in again.\nRedirect into login page.."
        );
        return false;
      } else {
        return true;
        response.json();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default DeleteRecord;
