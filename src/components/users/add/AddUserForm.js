import React from "react";

import { useForm } from "react-hook-form";

import styles from "@/style";

const AddUserForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
    defaultValues: {
      firstName: '',
      age: '',
      tagFirst: '',
      tagSecond: '',
      tagThird: ''
    }
  });

  async function onSubmit(data) {
    const enteredFirstName = data.firstName;
    const enteredAge = data.age;
    const enteredTagFirst = data.tagFirst;
    const enteredTagSecond = data.tagSecond;
    const enteredTagThird = data.tagThird;

    console.log('name: ' + enteredFirstName);
    console.log('age: ' + enteredAge);
    console.log('1st tag: ' + enteredTagFirst);
    console.log('2nd tag: ' + enteredTagSecond);
    console.log('3rd tag: ' + enteredTagThird);

    reset();
  };

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-[60%] pt-2 pb-6 mb-2 mx-auto">

      <div className="pb-6">
        <label htmlFor='firstName' className="pl-2">Name *</label>
        <input type='text' id='firstName' className={`w-[100%] border-b border-stone-800 ${styles.mainBackgroundColor}`} {...register("firstName", { required: {
        value: true,
        message: 'This field is required'
        }})} />
        {errors.firstName && <p className="text-rose-900">{errors.firstName.message}</p>}
      </div>

      <div className="pb-6">
        <label htmlFor='age' className="pl-2">Age *</label>
        <input type='number' id='age' className={`w-[100%] border-b border-stone-800 ${styles.mainBackgroundColor}`} {...register("age", { min: 13, message: 'You have to be at least 13 years old to join our community' }, { required: {
        value: true,
        message: 'This field is required'
        }})} />
        <p className="text-sm italic text-lime-900 pl-2">You have to be at least 13 years old to join our community</p>
        {errors.age && <p className="text-rose-900">{errors.age.message}</p>}
      </div>

      <div className="pb-6">
        <p className="text-sm italic text-center text-lime-900 font-medium">For a better user experience and better connections, describe yourself in three words</p>
      </div>

      <div className="pb-6">
        <label htmlFor='tagFirst' className="pl-2">First tag *</label>
        <input type='text' id='tagFirst' className={`w-[100%] border-b border-stone-800 ${styles.mainBackgroundColor}`} {...register("tagFirst", { required: {
        value: true,
        message: 'This field is required'
        }})} />
        {errors.tagFirst && <p className="text-rose-900">{errors.tagFirst.message}</p>}
      </div>

      <div className="pb-6">
        <label htmlFor='tagSecond' className="pl-2">Second tag *</label>
        <input type='text' id='tagSecond' className={`w-[100%] border-b border-stone-800 ${styles.mainBackgroundColor}`} {...register("tagSecond", { required: {
        value: true,
        message: 'This field is required'
        }})} />
        {errors.tagSecond && <p className="text-rose-900">{errors.tagSecond.message}</p>}
      </div>

      <div className="pb-6">
        <label htmlFor='tagThird' className="pl-2">Third tag *</label>
        <input type='text' id='tagThird' className={`w-[100%] border-b border-stone-800 ${styles.mainBackgroundColor}`} {...register("tagThird", { required: {
        value: true,
        message: 'This field is required'
        }})} />
        {errors.tagThird && <p className="text-rose-900">{errors.tagThird.message}</p>}
      </div>

      <div className="flex justify-center py-4">
        <button type="submit" className='w-[80%] outline px-6 py-4 bg-slate-700 disabled:bg-slate-500 text-zinc-200 hover:bg-slate-600' disabled={!isDirty || !isValid}>Add yourself to our community</button>
      </div>

    </form>

  </div>
  )
};

export default AddUserForm;