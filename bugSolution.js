```javascript
// bugSolution.js
async function getData() {
  const docRef = doc(db, "collection", "docId");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const myData = docSnap.data().myProperty; // Access property after data is loaded
    console.log("myProperty:", myData);
  } else {
    console.log("No such document!");
  }
}
```