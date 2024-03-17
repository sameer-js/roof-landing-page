import { CONTACTS1, CONTACTS2 } from '@/utils/constants';
import { useForm } from 'react-hook-form';
import { BsCheckAll } from 'react-icons/bs';

const ContactMode = ({ icon, titleText, description, buttonText }) => {
  return (
    <div className='flexColCenter mode'>
      <div className='flexStart'>
        <div className='flexCenter icon'>{icon}</div>
        <div className='flexColStart detail'>
          <span className='primaryText'>{titleText}</span>
          <span className='secondaryText'>{description}</span>
        </div>
      </div>
      <div className='flexCenter button'>{buttonText}</div>
    </div>
  );
};

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <div className='flexColStart c-left'>
          <span className='orangeText'>Get in Touch</span>
          <span className='primaryText'>Contact Us</span>
          <span className='secondaryText'>
            We always ready to help by providing the best services for you. We
            believe a good place can make your life better
          </span>
          <div className='flexColStart contactModes'>
            <div className='flexStart row'>
              {CONTACTS1.map((contact, i) => (
                <ContactMode
                  icon={contact.icon}
                  titleText={contact.titleText}
                  description={contact.description}
                  buttonText={contact.buttonText}
                  key={i}
                />
              ))}
            </div>
            <div className='flexStart row'>
              {CONTACTS2.map((contact, i) => (
                <ContactMode
                  icon={contact.icon}
                  titleText={contact.titleText}
                  description={contact.description}
                  buttonText={contact.buttonText}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='c-right flexColStart'>
          <span className='orangeText'>Get a Quote</span>
          <span className='primaryText'>Enquiry Details</span>
          <form
            className='formDetails'
            target='_blank'
            onSubmit={onSubmit}
            method='POST'
            action='http://formsubmit.co/your@email.com'
          >
            <input
              className='inputDetails'
              type='text'
              placeholder='Your name'
              {...register('name', {
                required: true,
                maxLength: 64,
              })}
            />
            {errors.name && (
              <p className='errorMessage'>
                {errors.name.type === 'required' && 'Your name is required.'}
                {errors.name.type === 'maxLength' &&
                  'Max length is 64 characters.'}
              </p>
            )}

            <input
              className='inputDetails'
              type='email'
              placeholder='Your email'
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className='errorMessage'>
                {errors.email.type === 'required' && 'Your email is required.'}
                {errors.email.type === 'pattern' && 'Invalid Email Address.'}
              </p>
            )}

            <textarea
              className='inputDetails'
              rows={7}
              cols={50}
              placeholder='How can we help you?'
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className='errorMessage'>
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 characters.'}
              </p>
            )}

            <button type='submit' className='button formButton'>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
