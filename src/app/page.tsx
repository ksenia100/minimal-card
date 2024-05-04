'use client'

import { Typography, Button, Rating, Table, TableBody, TableRow, TableCell} from '@mui/material';

import SelectColor from './../components/select/selectcolor'
import SelectMemo from '../components/select/selectmemo'
import SelectSize from './../components/select/selectsize'

import Image from '@/components/image/image';
import Label from '@/components/label/label';

import styles from './page.module.css';

const ProductCardMinimal: React.FC = () => {

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Image
              src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png"
              effect="blur"
              className={styles.image}
              wrapperClassName="my-image-wrapper"
              sx={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                width: '100%', 
                borderRadius: '8px',
              }}
            />
          </TableCell>
          <TableCell>
            <div className={styles.detailsContainer}>
              <Typography variant="h4">
                MacBook Air (M1, 2020 р.)
              </Typography>
              <div className={styles.rateContainer}>
                <Rating name="customized-empty" defaultValue={4.5} precision={0.5} />
                <Label color="primary" variant="filled" className={styles.feedbacks}>
                  398 feedbacks
                </Label>
              </div>
              <div className={styles.productDetails}>
                <Typography className={styles.price}>150 000₴</Typography>
                <Button className={styles.buyButton}>Buy</Button>
                <Button className={styles.buyCredit}>Remind me later</Button>
              </div>
              <div className={styles.selections}>
                <SelectColor />
                <SelectMemo/>
                <SelectSize/>
              </div>
              <div className={styles.description}>
                <Typography>
                  macOS is the most advanced desktop operating system. macOS Big Sur features a bold interface design and major app updates that take macOS to a new level of power and beauty.
                </Typography>  
              </div>
              <a href="https://support.apple.com/uk-ua/macos" className={styles.learn}>Learn more about the latest operating systems</a>
              <a href="https://support.apple.com/uk-ua/guide/mac-help/welcome/mac" className={styles.user}>macOS User Guide</a>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default ProductCardMinimal;