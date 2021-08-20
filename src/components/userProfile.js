import React from "react";

const userProfile = () => {
  return (
      
    <div className="cf w-100 w-100-ns vh-100">
      <section className="fl p2 w-20-ns w-10-m w-20 bg-ez-light-black pa0 ma0 h-100 white-80">
        <div className="db w-100 bg-ez-dark-black mv-2">
          <h3 className="f3 ma0 pa2">Brand</h3>
        </div>
        <ul className="list pa1 center">
          <li className="tc-m hover-bg-blue pa3 pointer"><i className="material-icons v-mid">home</i><a className="link pa2 pointer white dn-m v-mid" href="#0">Dashboard</a></li>
          <li className="tc-m hover-bg-blue pa3 pointer"><i className="material-icons v-mid">class</i><a className="link pa2 pointer white dn-m v-mid" href="#0">Classes</a></li>
          <li className="tc-m hover-bg-blue pa3 pointer"><i className="material-icons v-mid">assignment_ind</i><a className="link pa2 pointer white dn-m v-mid" href="#0">Instructors</a></li>
          <li className="tc-m hover-bg-blue pa3 pointer"><i className="material-icons v-mid">person_outline</i><a className="link pa2 pointer white dn-m v-mid" href="#0">Guests</a></li>
          <li className="tc-m hover-bg-blue pa3 pointer"><i className="material-icons v-mid">place</i><a className="link pa2 pointer white dn-m v-mid" href="#0">Locations</a></li>
          <li className="tc-m hover-bg-blue pa3 pointer"><i className="material-icons v-mid">visibility</i><a className="link pa2 pointer white dn-m v-mid" href="#0">Reporting</a></li>
        </ul>
      </section>
      <section className="fl w-80-ns w-80 bg-light-gray vh-100">
        <div className="db w-100 bg-white-80 shadow-sm mv-2">
          <h3 className="f4 tr ma0 pa2 black-60"><img src="http://www.fillmurray.com/25/25" className="br-100 dib mr2 v-mid" alt="" />Calvin <i className="material-icons v-mid">keyboard_arrow_down</i></h3>
        </div>
        <div className="w-90 center br2 bg-white pa2 mh3 mv4">
          <h3 className="f4 lh-copy-ns"><i className="material-icons v-mid">layers</i>Add New Asset</h3>
          <div className="mt3">
            <label className="db fw4 lh-copy f6 black-40 tracked ttu" htmlFor="asset-name">Name</label>
            <input className="pa2 input-reset ba b--light-silver br2 bg-white-20 w-100 measure" type="text" name="asset-name"  id="asset-name" />
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6 black-40 tracked ttu" htmlFor="asset-photo">Photo</label>
            <input className="pa2 input-reset ba b--light-silver br2 bg-white-20 w-100 measure" type="text" name="asset-photo"  id="asset-photo" />
            <button className="f6 link ba dim br2 ph3 pv2 mb2 dib black-40 bg-light-gray" href="#00">Upload</button>
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6 black-40 tracked ttu" htmlFor="asset-capacity">Capacity</label>
            <select className="pa2 input-reset ba b--light-silver br2 bg-white-20 w-100 measure" name="asset-capacity"  id="asset-capacity">
              <option value="0">0</option>
              <option value="0">1</option>
              <option value="0">2</option>
            </select>
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6 black-40 tracked ttu" htmlFor="asset-description">Capacity</label>
            <textarea className="pa2 input-reset ba b--light-silver br2 bg-white-20 w-100 measure" name="asset-description"  id="asset-description">

            </textarea>
          </div>
          <a className="f6 link dim br2 ph3 pv2 ma2 db white bg-blue ttu tc" href="#0"><i className="material-icons v-mid">add</i> Add New Asset</a>
        </div>
      </section>
    </div>  
    
  );
};

export default userProfile;
