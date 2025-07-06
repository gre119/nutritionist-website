import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        糖尿病専門 管理栄養士のウェブサイトへようこそ
      </Typography>
      <Typography variant="body1" paragraph>
        ここでは、糖尿病の管理と健康的な生活を送るための情報を提供しています。
        管理栄養士として、皆様の健康をサポートするための実践的なアドバイスをお届けします。
      </Typography>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            糖尿病の主な症状
          </Typography>
          <Typography variant="body1" paragraph>
            糖尿病は初期には自覚症状が少ないことが多いですが、進行すると様々な症状が現れます。
            以下のような症状に心当たりがある場合は、早めに医療機関を受診しましょう。
          </Typography>
          <ul>
            <li><Typography variant="body1">喉の渇きがひどい、水分を多く摂る</Typography></li>
            <li><Typography variant="body1">尿の回数が増える、尿量が多い</Typography></li>
            <li><Typography variant="body1">体重が急に減る</Typography></li>
            <li><Typography variant="body1">疲れやすい、だるい</Typography></li>
            <li><Typography variant="body1">手足のしびれや痛み</Typography></li>
            <li><Typography variant="body1">目がかすむ、視力低下</Typography></li>
            <li><Typography variant="body1">皮膚のかゆみ、できものが治りにくい</Typography></li>
          </ul>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            糖尿病と食生活
          </Typography>
          <Typography variant="body1" paragraph>
            糖尿病の管理において、食生活は非常に重要です。適切な食事は血糖値のコントロールに直結します。
            以下のポイントを意識した食生活を心がけましょう。
          </Typography>
          <ul>
            <li><Typography variant="body1">**バランスの取れた食事**: 炭水化物、タンパク質、脂質をバランス良く摂取しましょう。</Typography></li>
            <li><Typography variant="body1">**食物繊維の摂取**: 野菜、きのこ、海藻類など、食物繊維が豊富な食品を積極的に摂りましょう。血糖値の急激な上昇を抑える効果があります。</Typography></li>
            <li><Typography variant="body1">**糖質の摂取量と質**: 砂糖を多く含む食品や飲料は控え、全粒穀物や未精製の炭水化物を選びましょう。</Typography></li>
            <li><Typography variant="body1">**規則正しい食事時間**: 毎日決まった時間に食事を摂ることで、血糖値の変動を安定させます。</Typography></li>
            <li><Typography variant="body1">**ゆっくりよく噛んで食べる**: 満腹感を得やすくなり、食べ過ぎを防ぎます。</Typography></li>
            <li><Typography variant="body1">**塩分・脂質の控えめな調理**: 合併症のリスクを減らすためにも、薄味を心がけ、揚げ物などは控えめにしましょう。</Typography></li>
          </ul>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            糖尿病で気を付けること
          </Typography>
          <Typography variant="body1" paragraph>
            食生活以外にも、糖尿病の管理には日々の生活習慣が大きく影響します。
            以下の点に注意して、健康的な生活を送りましょう。
          </Typography>
          <ul>
            <li><Typography variant="body1">**定期的な運動**: 血糖値を下げる効果があり、体重管理にも役立ちます。無理のない範囲で継続しましょう。</Typography></li>
            <li><Typography variant="body1">**体重管理**: 適正体重を維持することは、糖尿病の改善に繋がります。</Typography></li>
            <li><Typography variant="body1">**ストレス管理**: ストレスは血糖値に影響を与えることがあります。リラックスする時間を作りましょう。</Typography></li>
            <li><Typography variant="body1">**禁煙・節酒**: 喫煙や過度な飲酒は、糖尿病の合併症のリスクを高めます。</Typography></li>
            <li><Typography variant="body1">**定期的な検査**: 医師の指示に従い、定期的に血糖値やHbA1cなどの検査を受けましょう。</Typography></li>
            <li><Typography variant="body1">**足のケア**: 糖尿病患者さんは足のトラブルが起こりやすいので、毎日足の状態をチェックし、清潔に保ちましょう。</Typography></li>
          </ul>
        </CardContent>
      </Card>

    </Container>
  );
};

export default Home;
