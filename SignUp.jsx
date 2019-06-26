import React from 'react';
import './signup.css';
import { Button, Form, Grid, Header, Message, Segment,Dropdown} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import fire from './config';
import Login from './Login';
import Picker from 'react-picker';
import firebase from 'firebase';
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';


let states =["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chandigarh (UT)","Chhattisgarh","Dadra and Nagar Haveli (UT)","Delhi (NCT)","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep (UT)","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry (UT)","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"]

let Assam = [ "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa" ]
let Bihar = ["Bihar1","Bihar2"]	 
let stateoptions = [

	{
		id: 0,
		text: 'Andhra Pradesh',
		value: 'Andhra Pradesh',
		selected: false,
		key: 'location0',
		districts:[ "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa" ]
	
		},
	{
		id: 1,
		text: 'Arunachal Pradesh',
		selected: false,
		value: 'Arunachal Pradesh',
		key: 'location1',
		districts: [ "Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding" ]
		},
	{
		id: 2,
		text: 'Assam',
		selected: false,
		value: 'Assam',
		key: 'location2',
		districts: [ "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong" ]
		},
	{
		id: 3,
		text: 'Bihar',
		selected: false,
		value: 'Bihar',
		key: 'location3',
		districts: [ "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran (Motihari)", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger (Monghyr)", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia (Purnea)", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran" ]
		},
	{
		id: 4,
		text: 'Chandigarh (UT)',
		selected: false,
		value: 'Chandigarh (UT)',
		key: 'location4',
		districts: [ "Chandigarh" ]
		},
	{
		id: 5,
		text: 'Chattisgarh',
		selected: false,
		value: 'Chattisgarh',
		key: 'location5',
		districts: [ "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada (South Bastar)", "Dhamtari", "Durg", "Gariyaband", "Janjgir-Champa", "Jashpur", "Kabirdham (Kawardha)", "Kanker (North Bastar)", "Kondagaon", "Korba", "Korea (Koriya)", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur  ", "Surguja" ]
		},
	{
		id: 6,
		text: 'Dadra and Nagar Haveli (UT)',
		selected: false,
		value: 'Dadra and Nagar Haveli (UT)',
		key: 'location6',
		districts: [ "Dadra & Nagar Haveli" ]
		},
	{
		id: 7,
		text: 'Delhi (NCT)',
		value: 'Delhi (NCT)',
		selected: false,
		key: 'location7',
		districts: [ "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East  Delhi", "North West  Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West  Delhi", "West Delhi" ]
		},
	{
		id: 8,
		text: 'Goa',
		selected: false,
		value: 'Goa',
		key: 'location8',
		districts:[ "North Goa", "South Goa" ]
		},
	{
		id: 9,
		selected: false,
		text: 'Gujarat',
		value: 'Gujarat',
		key: 'location9',
		districts:[ "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha (Palanpur)", "Bharuch", "Bhavnagar", "Botad", "Chhota Udepur", "Dahod", "Dangs (Ahwa)", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh", "Kheda (Nadiad)", "Mahisagar", "Mehsana", "Morbi", "Narmada (Rajpipla)", "Navsari", "Panchmahal (Godhra)", "Patan", "Porbandar", "Rajkot", "Sabarkantha (Himmatnagar)", "Surat", "Surendranagar", "Tapi (Vyara)", "Vadodara", "Valsad" ]
		},
	{
		id: 10,
		text: 'Haryana',
		value: 'Haryana',
		selected: false,
		key: 'location10',
		districts: [ "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar" ] 
		},
	{
		id: 11,
		text: 'Himachal Pradesh',
		value: 'Himachal Pradesh',
		selected: false,
		key: 'location11',
		districts: [ "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul &amp; Spiti", "Mandi", "Shimla", "Sirmaur (Sirmour)", "Solan", "Una" ]
		},
	{
		id: 12,
		text: 'Jammu and Kashmir',
		value: 'Jammu and Kashmir',
		selected: false,
		key: 'location12',
		districts: [ "Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur" ]
		},
	{
		id: 13,
		text: 'Jharkhand',
		value: 'Jharkhand',
		selected: false,
		key: 'location13',
		districts: [ "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum" ]
		},
	{
		id: 14,
		text: 'Karnataka',
		value: 'Karnataka',
		selected: false,
		key: 'location14',
		districts: [ "Bagalkot", "Ballari (Bellary)", "Belagavi (Belgaum)", "Bengaluru (Bangalore) Rural", "Bengaluru (Bangalore) Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi (Gulbarga)", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru (Mysore)", "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)", "Udupi", "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir" ]
		},
	{
		id: 15,
		text: 'Kerala',
		value: 'Kerala',
		selected: false,
		key: 'location15',
		districts: [ "Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur" ]

		},
	{
		id: 16,
		text: 'Lakshadweep (UT)',
		value: 'Lakshadweep (UT)',
		selected: false,
		key: 'location16',
		districts: [ "Agatti", "Amini", "Androth", "Bithra", "Chethlath", "Kavaratti", "Kadmath", "Kalpeni", "Kilthan", "Minicoy" ] 
		},
	{
		id: 17,
		text: 'Madhya Pradesh',
		value: 'Madhya Pradesh',
		selected: false,
		key: 'location17',
		districts: [ "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha" ]
		},
	{
		id: 18,
		text: 'Maharashtra',
		value: 'Maharashtra',
		selected: false,
		key: 'location18',
		districts: [ "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal" ] 
		},
	{
		id: 19,
		text: 'Manipur',
		value: 'Manipur',
		selected: false,
		key: 'location19',
		districts: [ "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul" ]
		},
	{
		id: 20,
		text: 'Megalaya',
		value: 'Megalaya',
		selected: false,
		key: 'location20',
		districts: [ "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills ", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills" ]
		},
	{
		id: 21,
		text: 'Mizoram',
		value: 'Mizoram',
		selected: false,
		key: 'location21',
		districts: [ "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip" ]
		},
	{
		id: 22,
		text: 'Nagaland',
		value: 'Nagaland',
		selected: false,
		key: 'location22',
		districts: [ "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto" ]
		},
	{
		id: 23,
		text: 'Odisha',
		value: 'Odisha',
		selected: false,
		key: 'location23',
		districts: [ "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar (Keonjhar)", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Sonepur", "Sundargarh" ]
		},
	{
		id: 24,
		text: 'Puducherry (UT)',
		value: 'Puducherry (UT)',
		selected: false,
		key: 'location24',
		districts: [ "Karaikal", "Mahe", "Pondicherry", "Yanam" ]
		},
	{
		id: 25,
		text: 'Punjab',
		value: 'Punjab',
		selected: false,
		key: 'location25',
		districts: [ "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr (Shahid Bhagat Singh Nagar)", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar (Mohali)", "Sangrur", "Tarn Taran" ]
		},
	{
		id: 26,
		text: 'Rajasthan',
		value: 'Rajasthan',
		selected: false,
		key: 'location26',
		districts: [ "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur" ]
		},
	{
		id: 27,
		text: 'Sikkim',
		value: 'Sikkim',
		selected: false,
		key: 'location27',
		districts: [ "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim" ]
		},
	{
		id: 28,
		text: 'Tamilnadu',
		value: 'Tamilnadu',
		selected: false,
		key: 'location28',
		districts: [ "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi (Tuticorin)", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar" ]
		},
	{
		id: 29,
		text: 'Telangana',
		value: 'Telangana',
		selected: false,
		key: 'location29',
		districts: [ "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhoopalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal (Rural)", "Warangal (Urban)", "Yadadri Bhuvanagiri" ]
	},
	
	{
		id: 30,
		text: 'Tripura',
		value: 'Tripura',
		selected: false,
		key: 'location30',
		districts: [ "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura" ]
		},
	{
		id: 31,
		text: 'Uttarakhand',
		value: 'Uttarakhand',
		selected: false,
		key: 'location31',
		districts: [ "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi" ]
		},
	{
		id: 32,
		text: 'Uttar Pradesh',
		value: 'Uttar Pradesh',
		selected: false,
		key: 'location32',
		districts: [ "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi (Chatrapati Sahuji Mahraj Nagar)", "Amroha (J.P. Nagar)", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur (Panchsheel Nagar)", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar (Kasganj)", "Kaushambi", "Kushinagar (Padrauna)", "Lakhimpur - Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur", "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar", "Shahjahanpur", "Shamali (Prabuddh Nagar)", "Shravasti", "Siddharth Nagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi" ]
		},
	{
		id: 33,
		text: 'West Bengal',
		value: 'West Bengal',
		selected: false,
		key: 'location33',
		districts: [ "Alipurduar", "Bankura", "Birbhum", "Burdwan (Bardhaman)", "Cooch Behar", "Dakshin Dinajpur (South Dinajpur)", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur (West Medinipur)", "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas", "Uttar Dinajpur (North Dinajpur)" ]
		}
	

	]


class SignUp extends React.Component {
	constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password1: '',
	  password2 : '',
	  username: '',
	  place: '',
	  value: null,
	  disvalue: null
	};
  }
  

  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
	console.log(this.state);
  }
  signup(e){
	  if(this.state.password1 === this.state.password2)
	  {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password1).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error.message);
		alert(error.message);
      })
	  }
	  else
		  alert("Passwords do not match");
  };
  
  dataBase = async() => {
	  this.signup(this);
  
    var users = [];
    console.log("Hello");
    var  query1 = firebase.database().ref("users");
    query1.push({username : this.state.username, email : this.state.email, place : this.state.place, password: this.state.password1});

  }
  
 

  
  
    render() {
		const{list} = this.props
		const{listOpen, headerTitle} = this.state
        return (
		            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450, backgroundColor:"white" }} >
                    <Header as='h2' color='teal' textAlign='center'>
                        Create new account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
						
						<Form.Input fluid icon='user' iconPosition='left' placeholder='Username' value={this.state.username} onChange={this.handleChange}
							type="name" name="username" class="form-control" id="InputUsername" />
						
                    
					   <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail' value={this.state.email} onChange={this.handleChange}
							type="email" name="email" class="form-control" id="InputEmail" />
						
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
							type='password'
							value={this.state.password1}
							onChange={this.handleChange}
							name="password1" 
							class="form-control"
							id="InputPassword1"
                        />
						<Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Confirm Password'
							type='password'
							value={this.state.password2}
							onChange={this.handleChange}
							name="password2" 
							class="form-control"
							id="InputPassword2"
                        />
						
						<DropdownList
        data={states}
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
	  <DropdownList
        data={this.state.value}
        value={this.state.disvalue}
        onChange={value => this.setState({ value })}
      />
            
						
						
	
						<Form.Input fluid icon='map marker alternate' iconPosition='left' placeholder='Place' value={this.state.place} onChange={this.handleChange}
							type="name" name="place" class="form-control" id="InputPlace"/>
						
                        <button color='teal' fluid size='large' onClick={this.dataBase.bind(this)} class="btn btn-primary">
                            Sign Up
                        </button>
                        </Segment>
                    </Form>
                    <Message>
						Already have an account ? <Link to = "/login"> Login</Link>
                    </Message>
                </Grid.Column>
        </Grid>
        );
    }
}

export default SignUp;