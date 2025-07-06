import React from 'react';
import { Container, Typography, Card, CardContent, TextField, Button } from '@mui/material';

const Consultation: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            糖尿病についてのご相談
          </Typography>
          <Typography variant="body1" paragraph>
            糖尿病に関するご質問や、栄養指導のご依頼など、お気軽にお問い合わせください。
            皆様の健康をサポートするため、管理栄養士が丁寧に対応させていただきます。
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            ご相談料金について
          </Typography>
          <Typography variant="body1" paragraph>
            当サービスは有料となります。ご相談内容に応じて以下の料金体系を設けております。
          </Typography>
          <ul>
            <li><Typography variant="body1">初回カウンセリング（60分）: 5,000円</Typography></li>
            <li><Typography variant="body1">継続カウンセリング（30分）: 3,000円</Typography></li>
            <li><Typography variant="body1">メール相談（1往復）: 2,000円</Typography></li>
          </ul>
          <Typography variant="body1" paragraph>
            お支払い方法は、銀行振込またはクレジットカード決済（準備中）となります。
            詳細はお問い合わせ後にご案内させていただきます。
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            お問い合わせフォーム
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="お名前"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="メールアドレス"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
            />
            <TextField
              label="ご相談内容"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={6}
              required
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              送信
            </Button>
          </form>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            お電話でのお問い合わせ
          </Typography>
          <Typography variant="body1" paragraph>
            お急ぎの場合は、お電話でもご相談を承っております。
          </Typography>
          <Typography variant="h6" component="p">
            電話番号: XXX-XXXX-XXXX
          </Typography>
          <Typography variant="body2" color="text.secondary">
            受付時間: 平日 9:00 - 17:00
          </Typography>

        </CardContent>
      </Card>
    </Container>
  );
};

export default Consultation;