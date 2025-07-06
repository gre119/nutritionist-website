import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            山家 恵 (Yamaga Megumi)
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            管理栄養士
          </Typography>
          <Typography variant="body1" paragraph>
            はじめまして、管理栄養士の山家 恵と申します。
            これまで〇〇年間、病院やクリニックで糖尿病患者様の栄養指導に携わってきました。
            患者様一人ひとりの生活スタイルや食習慣に合わせた、無理なく続けられる食事療法を提案することを心がけています。
          </Typography>
          <Typography variant="body1" paragraph>
            糖尿病は、日々の食生活が大きく影響する病気です。
            しかし、正しい知識と適切なサポートがあれば、血糖値を良好にコントロールし、合併症のリスクを減らすことができます。
            私は、皆様が糖尿病と上手に付き合い、より豊かな生活を送れるよう、全力でサポートさせていただきます。
          </Typography>
          <Typography variant="body1" paragraph>
            趣味は料理とウォーキングです。新しいレシピを考案したり、自然の中を歩くことで心身のリフレッシュを図っています。
            これらの経験も活かし、皆様に楽しく健康的な食生活を送っていただけるよう、実践的なアドバイスを提供してまいります。
          </Typography>
          <Typography variant="body1" paragraph>
            お気軽にご相談ください。
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
