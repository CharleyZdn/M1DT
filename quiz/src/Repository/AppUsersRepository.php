<?php

namespace App\Repository;

use App\Entity\AppUsers;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AppUsers|null find($id, $lockMode = null, $lockVersion = null)
 * @method AppUsers|null findOneBy(array $criteria, array $orderBy = null)
 * @method AppUsers[]    findAll()
 * @method AppUsers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AppUsersRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AppUsers::class);
    }
    public function findOneByUserName($value, $value2): ?AppUsers
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.username = :val')
            ->andWhere('a.password = :val2')
            ->setParameter('val', $value)
            ->setParameter('val2', $value2)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
//    /**
//     * @return AppUsers[] Returns an array of AppUsers objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AppUsers
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
