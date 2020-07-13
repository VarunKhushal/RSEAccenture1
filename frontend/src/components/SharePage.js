import React, { Component, useState } from 'react';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router';
import S3FileUpload from 'react-s3';

const config = {
  bucketName: 'rse-testbucket',
  region: 'us-east-2',
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS,
};

class SharePage extends Component {

  render() {
    return (
      <div className="">
        <SignupForm />
      </div>
    );
  }
}

export default SharePage;

const SignupForm = () => {
  const [redirect, setRedirect] = useState(false);

  const upload = (e) => {
    console.log(e.target.files[0]);
    S3FileUpload.uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data);
        formik.values.imageLink = data.location;
        console.log(data.location);
        console.log(formik.values.imageLink);
        formik.setFieldValue('imageLink', data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues: {
      productName: '',
      description: '',
      imageLink: '',
      quantity: '',
      units: '',
    },
    onSubmit: (values) => {
      console.log(values);

      Swal.fire({
        title: 'Sending...',
      });
      Swal.showLoading();

      fetch(process.env.REACT_APP_API_ENDPOINT + 'product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          product_name: values.productName,
          image_link: values.imageLink,
        }),
      }).then(async (res) => {
        const text = await res.json();
        console.log(res);

        if (res.status === 201) {
          Swal.fire({
            title: 'Done!',
            icon: 'success',
          }).then(() => {
            setRedirect(true);
          });
        } else {
          Swal.fire({
            title: 'Oops...',
            text: `Something went wrong. Error code: ${res.status}. Message: ${text}`,
            icon: 'error',
          });
        }
      });
    },
  });

  return redirect === true ? (
    <Redirect to="/" />
  ) : (
    <form className="form-style-7" onSubmit={formik.handleSubmit}>
      <h3>Make a donation!</h3>
      <ul>
        <li>
          <label htmlFor="productName">Product name</label>
          <input
            type="text"
            name="productName"
            onChange={formik.handleChange}
            value={formik.values.productName}
          />
        </li>
        <li>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </li>
        {/* <li>
          <label htmlFor="imageLink">Image link</label>
          <input
            type="text"
            name="imageLink"
            onChange={formik.handleChange}
            value={formik.values.imageLink}
          />
        </li> */}
        <li>
          <label htmlFor="imageLink">Upload Image</label>
          <input
            type="file"
            name="imageLink"
            onChange={upload}
            //  value={formik.values.imageLink}
          />
        </li>
        <li>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            name="quantity"
            onChange={formik.handleChange}
            value={formik.values.quantity}
          />
        </li>
        <li>
          <label htmlFor="units">Units</label>
          <input
            type="text"
            name="units"
            onChange={formik.handleChange}
            value={formik.values.product_name}
          />
        </li>
        <li>
          <input type="submit" value="Submit!" />
        </li>
      </ul>
    </form>
  );
};
