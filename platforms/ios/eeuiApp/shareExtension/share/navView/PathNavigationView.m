//
//  PathNavigationView.m
//  ShareExtension
//
//  Created by Hitosea-005 on 2023/6/5.
//

#import "PathNavigationView.h"
#import <Masonry.h>
#import "NavCell.h"
@interface PathNavigationView()<UICollectionViewDelegateFlowLayout,UICollectionViewDataSource>
@property (nonatomic, strong)UICollectionView *navItem;


@end

@implementation PathNavigationView

-(instancetype)initWithArray:(NSArray *)pathArray {
    self = [super init];
    if (self) {
        self.navArray = [pathArray mutableCopy];
        [self baseInit];
//        [self monitorData];
    }
    
    return self;
}

- (void)baseInit{
    UICollectionViewFlowLayout *layout = [[UICollectionViewFlowLayout alloc] init];
    layout.scrollDirection = UICollectionViewScrollDirectionHorizontal;
    layout.minimumLineSpacing = 0;
    
    self.navItem = [[UICollectionView alloc] initWithFrame:CGRectZero collectionViewLayout:layout];
    self.navItem.delegate = self;
    self.navItem.dataSource = self;
    self.navItem.backgroundColor = [UIColor.grayColor colorWithAlphaComponent:0.1];;
    [self.navItem registerNib:[UINib nibWithNibName:@"NavCell" bundle:nil] forCellWithReuseIdentifier:@"NavCell"];
    [self addSubview:self.navItem];
    
    [self.navItem mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.bottom.equalTo(self);
    }];
    
}

- (void)monitorData {
    self.navArray = [@[@"short", @"longlong11111", @"midem22", @"11", @"asasdasdasdadasdasdasdasdasdasassaaaaasdasdasdasdasdasdaaaaaasdasdasdasdasdsdsdasdasdasd"] mutableCopy];
}

- (nonnull __kindof UICollectionViewCell *)collectionView:(nonnull UICollectionView *)collectionView cellForItemAtIndexPath:(nonnull NSIndexPath *)indexPath {
    NavCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"NavCell" forIndexPath:indexPath];
    NSString *title = self.navArray[indexPath.row][@"name"];
    cell.dirLabel.text = title;
    return cell;
}

-(void)collectionView:(UICollectionView *)collectionView didSelectItemAtIndexPath:(NSIndexPath *)indexPath{
    NSMutableArray *array = [NSMutableArray array];
    for (int a=0; a<indexPath.row; a++) {
        [array addObject:self.navArray[a]];
    }
    ///生成新的数组
    
    self.navArray = array;
    [collectionView reloadData];
    if (_delegate&&[_delegate respondsToSelector:@selector(selectWithArray:)]) {
        [_delegate selectWithArray:array];
    }
}

- (NSInteger)collectionView:(nonnull UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section {
    return self.navArray.count;
}

-(CGSize)collectionView:(UICollectionView *)collectionView layout:(UICollectionViewLayout *)collectionViewLayout sizeForItemAtIndexPath:(NSIndexPath *)indexPath{
    NSString *title = self.navArray[indexPath.row][@"name"];
    CGFloat width = [title boundingRectWithSize:CGSizeMake(CGFLOAT_MAX, 30) options:NSStringDrawingUsesLineFragmentOrigin attributes:@{NSFontAttributeName:[UIFont systemFontOfSize:15]} context:nil].size.width;
    
    return CGSizeMake(width+25, 30);
}

#pragma mark - setter
-(void)setNavArray:(NSMutableArray *)navArray{
    _navArray = navArray;
    
    [self.navItem reloadData];
}

@end
