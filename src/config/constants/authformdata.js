const AUTHFORMDATA=[
    {
      id:'email',
      label:'Email Address',
      name:'email',
      type:'email',
      required:true,
      initialValue:'',
      forLogin:true
    },
    {
      id:'firstName',
      label:'First Name',
      name:'firstName',
      type:'text',
      required:true,
      initialValue:''
    },
    {
      id:'lastName',
      label:'Last Name',
      name:'lastName',
      type:'text',
      required:true,
      initialValue:''
    },
    {
      id:'dateOfBirth',
      label:'Date of birth',
      name:'dateOfBirth',
      type:'date',
      required:true,
      initialValue:''
    },
    {
      id:'password',
      label:'Enter Password',
      name:'password',
      type:'password',
      required:true,
      initialValue:'',
      forLogin:true
    },
    {
      id:'confirmpassword',
      label:'Confirm password',
      name:'confirmpassword',
      type:'password',
      required:true,
      initialValue:''
    }
  ]
  export default AUTHFORMDATA;