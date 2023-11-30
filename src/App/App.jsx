import './App.css'

function App() {

  const url = 'https://tyc.utn.centrodeelearning.com/videos.php?id=98808465138';
  const peticion = fetch(url)
  
  console.log(peticion);



  const clases = [
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-06c96ac1-267e-410d-8862-cdf088770125.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-0f456b51-3ce0-4ea5-ae94-56a62de3555c.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-10d1dfd5-03bb-4a92-b044-c4e0dbfd3952.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-10d9c4ac-92ea-488c-8ce2-a1080341fd5e.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-16c4cf3a-b329-41ca-969e-ee824f3c2ec4.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-1e8a37b3-8d73-4164-ad0e-6d7c350fb8ec.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-230ca4d4-9fde-4916-9411-70f59304c0f5.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-2498787f-2ab7-4a0c-87b2-c8e446669582.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-2785a99c-5ad8-42a6-a424-5a0c6c32dcdc.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-32c8b647-492e-43b6-843b-97ddf6ab5c56.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-33c38cd2-ca01-4dbd-8b58-28251965c55b.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-33eab23b-443e-48eb-b806-df33ed0ecb34.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-3542e4d1-8103-4f46-afb1-a2d59c9d1c38.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-3a1190e6-be15-4fe9-9091-576220f8f1ee.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-3d368ec4-4758-4fab-830f-f11575696528.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-4014f44e-7049-4c91-bbef-37574e155e7d.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-403f1350-3ccd-4d61-bdbe-9e6de281c24b.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-43a9b461-eea5-4f31-9115-371a7a41a4c9.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-47ca4ea8-c466-4466-977e-3c748d7779b1.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-49055904-639f-4088-824b-a310881d280d.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-4b3984d5-2e1c-4da1-8d5f-0bf8471659d5.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-51793504-6aa5-437a-b1e9-7df6d82d0627.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-531a5199-8762-46de-92fd-2fac29e702b5.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-53ad0edb-71b2-4a20-b4a7-0604f4ca810f.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-69d57ffd-7026-4fef-94e3-6051fdb3adf2.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-6e82c65b-1720-430f-9ac7-660ab47a20ea.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-71d4fcd6-d906-4f45-aca8-aa5bfb9a64dd.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-730af592-04d3-4ac6-ab4c-ab9bdb55a689.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-775da77a-d9b9-4676-89c9-b4bc6e873f13.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-7ecd14bd-08f1-4986-bfeb-aa7ed73efffc.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-80c4367e-0b5f-46e7-8cd5-c8270778cdfc.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-91fc0bf3-c81d-422c-85e1-3855f023cd25.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-9849a765-0149-4673-bb4e-da4ef2acd9ab.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-9ae51a8f-fae2-4d46-835b-c3ff4309fe93.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-9c672b02-8e63-4dd1-9fcc-b0240360e1b5.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-9dd425e1-aeef-4963-9304-04ed7f8834ee.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-9f405149-eea4-4500-8e3d-5c2c1e6c7353.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-9fc7ff7f-545e-44c5-a850-af4e7a586138.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-ab7907fb-0799-4b05-9bf0-0bd6c29c9504.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-b64cac04-8b4a-4225-b027-132168e4ba8d.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-b9dd5e28-9ddf-490e-8220-91235f8c4712.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-c637c550-6341-4284-a359-a249df220aed.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-e0dc8058-006b-4e64-9ad0-7ab756355778.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138-meeting-e201e5c3-d125-4148-a370-288ef0689395.mp4",
    "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138.mp4"
  ]


  return (
    <div className='layout'>
      <h1>Clases</h1>
      <div className="clasesContainer">
        {
          clases.map((clase) => {
            return (
              <video className='video' controls key={clase}>
                <source src={clase} type="video/mp4" />
              </video>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
