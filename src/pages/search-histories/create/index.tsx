import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createSearchHistory } from 'apiSdk/search-histories';
import { searchHistoryValidationSchema } from 'validationSchema/search-histories';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { SearchHistoryInterface } from 'interfaces/search-history';

function SearchHistoryCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: SearchHistoryInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createSearchHistory(values);
      resetForm();
      router.push('/search-histories');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<SearchHistoryInterface>({
    initialValues: {
      keywords: '',
      date: new Date(new Date().toDateString()),
      region: '',
      source_credibility: 0,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: searchHistoryValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Search Histories',
              link: '/search-histories',
            },
            {
              label: 'Create Search History',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Search History
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.keywords}
            label={'Keywords'}
            props={{
              name: 'keywords',
              placeholder: 'Keywords',
              value: formik.values?.keywords,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.date ? new Date(formik.values?.date) : null}
              onChange={(value: Date) => formik.setFieldValue('date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.region}
            label={'Region'}
            props={{
              name: 'region',
              placeholder: 'Region',
              value: formik.values?.region,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Source Credibility"
            formControlProps={{
              id: 'source_credibility',
              isInvalid: !!formik.errors?.source_credibility,
            }}
            name="source_credibility"
            error={formik.errors?.source_credibility}
            value={formik.values?.source_credibility}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('source_credibility', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/search-histories')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'search_history',
    operation: AccessOperationEnum.CREATE,
  }),
)(SearchHistoryCreatePage);
