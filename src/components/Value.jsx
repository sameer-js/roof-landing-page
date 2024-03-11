import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { VALUES } from '@/utils/constants';

const Value = () => {
  return (
    <div className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        <div className='v-left'>
          <div className='image-container'>
            <img src='./value.png' alt='roof-image' />
          </div>
        </div>

        <div className='flexColStart v-right'>
          <span className='orangeText'>Our Values</span>

          <span className='primaryText'>Values We Provide</span>

          <span className='secondaryText'>
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good place to live can make your life better
          </span>

          <Accordion
            className='accordion'
            allowZeroExpanded={false}
            preExpanded={[0]}
          >
            {VALUES.map((value, i) => {
              return (
                <AccordionItem className='accordionItem' key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                      <div className='flexCenter icon'>{value.icon}</div>
                      <span className='primaryText'>{value.heading}</span>
                      <div className='flexCenter icon'>
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded ? (
                              <BsCaretUpFill size={15} />
                            ) : (
                              <BsCaretDownFill size={15} />
                            )
                          }
                        </AccordionItemState>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='secondaryText'>{value.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Value;
