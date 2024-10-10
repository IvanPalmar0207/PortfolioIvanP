//Form Usage
import {useForm} from 'react-hook-form'
//Styles
import './styles/contact.css'

export function ContactMe(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const onSubmitForm = handleSubmit((data) => {
        const validData = {
            ...data
        }
    })

    return(
        <section>
            <div>
                <h2>
                    Go Ahead and Send Me a Message!
                </h2>
                <h3>
                    If you want to make a proposal or simply make a new 
                    contact, let's write something
                </h3>
            </div>
            <div>
                <form onSubmit={onSubmitForm}>                    
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" placeholder = "Enter your first name"
                        {...register("firstName", {required : true, minLength : 4})}
                        />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" placeholder = "Enter your last name"
                        {...register("lastName", {required : true, minLength : 4})}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="text" placeholder = "Enter your phone number"
                        {...register("phoneNumber", {required : true, minLength : 10, maxLength : 10})}
                        />
                        <label htmlFor=""></label>
                        <input type="email" placeholder = "Enter your email address"
                        {...register("emailAddress", {
                            required : true,
                            pattern : {
                                value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message : 'Please enter a valid email, try again dear user'
                            }
                        })}
                        />                    
                    </div>
                    <textarea placeholder="Send your message, we'll get in contact really soon, i hope you are doing so well"
                    {...register("messageContact", {required : true, minLength : 10})}
                    ></textarea>
                </form>
            </div>
        </section>
    )
}