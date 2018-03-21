# -*- coding: utf-8 -*-
#
# (c) 2013-2018 Wishtack
#
# $Id: $
#

from unittest import TestCase, skip

from pytraining.src.price_converter import PriceConverter
from pytraining.src.price_factory import PriceFactory


class TestPriceConverter(TestCase):

    @skip(u"Not implemented yet!")
    def test_convert_price_currency(self):

        converter = PriceConverter()

        price = PriceFactory().create_price_from_amount(amount=10, currency='EUR')

        converted_price = converter.convert_price(price=price, currency='USD')

        self.assertEqual(12, converted_price.amount)
        self.assertEqual('USD', converted_price.currency)
